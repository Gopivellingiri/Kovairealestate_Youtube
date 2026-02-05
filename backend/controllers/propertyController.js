import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import Property from "../model/properties.js";

export const getPropertyCards = catchAsyncErrors(async (req, res) => {
  const properties = await Property.find({ status: "approved" })
    .select(
      `propertyTitle propertyType propertyStatus price city state location media thumbnailIndex
    
    bedrooms bathrooms buildUpArea parkingSpaces

    plotArea floorNumber plotWidth yearOfBuilt possessionDate

    sizeOfLand soilType waterSource fencing plotLength
    `,
    )
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

  res.status(200).json({
    success: true,
    count: cards.length,
    properties: cards,
  });
});
