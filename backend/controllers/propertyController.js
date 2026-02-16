import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import Property from "../model/properties.js";

export const getPropertyCards = catchAsyncErrors(async (req, res) => {
  const {
    page = 1,
    limit = 6,
    type: propertyType,
    minPrice,
    maxPrice,
    bedrooms,
    city,
  } = req.query;
  console.log("what we are receving here:", req.query);

  const currentPage = Number(page);
  const currentLimit = Number(limit);
  const skip = (currentPage - 1) * currentLimit;

  //Base query
  const query = { status: "approved" };

  if (propertyType) query.propertyType = propertyType;
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }
  if (bedrooms) query.bedrooms = { $gte: Number(bedrooms) };

  //city filtering
  if (city) {
    const [cityName, stateName] = city.split(",").map((v) => v.trim());
    console.log("Here is the city name:", cityName);
    if (cityName) query.city = { $regex: cityName, $options: "i" };
    if (stateName) query.state = { $regex: stateName, $options: "i" };
  }

  //Fetch only field
  const properties = await Property.find(query)
    .select(
      `propertyTitle propertyType propertyStatus price city state location media thumbnailIndex
    
    bedrooms bathrooms buildUpArea parkingSpaces

    plotArea floorNumber plotWidth yearOfBuilt possessionDate

    sizeOfLand soilType waterSource fencing plotLength
    `,
    )
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(currentLimit)
    .lean();

  const cards = properties.map((p) => ({
    _id: p._id,
    propertyTitle: p.propertyTitle,
    propertyType: p.propertyType,
    propertyStatus: p.propertyStatus,
    price: p.price,
    city: p.city,
    state: p.state,
    thumbnail: p.media?.[p.thumbnailIndex] ?? null,
    location: p.location,

    specs: (() => {
      switch (p.propertyType) {
        case "House":
          return {
            bedrooms: p.bedrooms,
            bathrooms: p.bathrooms,
            buildUpArea: p.buildUpArea,
            parkingSpaces: p.parkingSpaces,
          };
        case "Agriculture":
          return {
            sizeOfLand: p.sizeOfLand,
            soilType: p.soilType,
            waterSource: p.waterSource,
            fencing: p.fencing,
          };
        case "Residential Plot":
          return {
            plotArea: p.plotArea,
            plotLength: p.plotLength,
            plotWidth: p.plotWidth,
            possessionDate: p.possessionDate,
          };

        case "Commercial":
          return {
            plotArea: p.plotArea,
            floorNumber: p.floorNumber,
            parkingSpaces: p.parkingSpaces,
            yearOfBuilt: p.yearOfBuilt,
          };
        default:
          return {};
      }
    })(),
  }));

  const totalProperties = await Property.countDocuments(query);
  const totalPages = Math.ceil(totalProperties / currentLimit);

  res.status(200).json({
    success: true,
    properties: cards,
    totalPages,
    currentPage,
    totalProperties,
  });
});
