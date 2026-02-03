//seeder/dummyProperties.js

//seeder/dummyProperties.js

export const properties = (users) => [
  {
    propertyTitle: "Cozy 3-Bedroom House Near City Center",
    propertyType: "House",
    propertyStatus: "For Rent",
    status: "approved",
    price: 20000,

    location: {
      type: "Point",
      coordinates: [76.9824453, 10.9849353],
    },

    bedrooms: 3,
    bathrooms: 2,
    yearOfBuilt: 2012,
    parkingSpaces: 2,
    possessionDate: new Date("2024-12-07"),
    age: "15 years",
    furnishing: "Semi Furnished",
    buildUpArea: "1500 sq ft",

    otherFeatures: [
      "Power Backup",
      "24x7 Security",
      "Lift",
      "CCTV Surveillance",
      "Gated Community",
    ],

    highlights: [],

    media: [
      {
        url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        type: "image/jpeg",
        publicId: "property_1",
      },
      {
        url: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
        type: "image/jpeg",
        publicId: "property_2",
      },
      {
        url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        type: "image/jpeg",
        publicId: "property_3",
      },
      {
        url: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
        type: "image/jpeg",
        publicId: "property_4",
      },
      {
        url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
        type: "image/jpeg",
        publicId: "property_5",
      },
    ],

    thumbnailIndex: 0,

    propertyAddress: "1/305, West Street",
    nearbyLandmark: "Near Airport",
    city: "Coimbatore",
    state: "Tamil Nadu",

    description:
      "A comfortable 3-bedroom house located close to the city center with peaceful surroundings.",

    zipCode: "641408",
    user: users[0]._id,
  },
  {
    propertyTitle: "Premium Residential Plot",
    propertyType: "Residential Plot",
    propertyStatus: "For Sale",
    status: "approved",
    price: 6500000,

    location: {
      type: "Point",
      coordinates: [77.041235, 11.078932],
    },

    possessionDate: new Date("2024-12-15"),

    plotArea: "2400 sq ft",
    plotWidth: "50 ft",
    plotLength: "50 ft",

    otherFeatures: ["Gated Community", "Road Access"],
    highlights: [],

    media: [
      {
        url: "https://images.pexels.com/photos/8165156/pexels-photo-8165156.jpeg",
        type: "image/jpeg",
        publicId: "property_6_1",
      },
      {
        url: "https://images.pexels.com/photos/5909671/pexels-photo-5909671.jpeg",
        type: "image/jpeg",
        publicId: "property_6_2",
      },
      {
        url: "https://images.pexels.com/photos/8094663/pexels-photo-8094663.jpeg",
        type: "image/jpeg",
        publicId: "property_6_3",
      },
      {
        url: "https://images.pexels.com/photos/13314829/pexels-photo-13314829.jpeg",
        type: "image/jpeg",
        publicId: "property_6_4",
      },
    ],

    thumbnailIndex: 0,

    propertyAddress: "Saravanampatti",
    nearbyLandmark: "IT Park",
    city: "Coimbatore",
    state: "Tamil Nadu",

    description: "Premium residential plot in a fast-developing locality.",

    zipCode: "641035",
    user: users[5]._id,
  },
  {
    propertyTitle: "10-Acre Organic Farm with Irrigation System",
    propertyType: "Agriculture",
    propertyStatus: "For Sale",
    status: "approved",
    price: 300000000,

    location: {
      type: "Point",
      coordinates: [79.1295914, 10.7570921],
    },

    sizeOfLand: "10 acre",
    soilType: "Black",
    landUse: "Coconut production",
    waterSource: true,
    fencing: true,
    topography: "Level",

    accessToRoad: "4 km away",
    pastYield: "Wheat",

    otherFeatures: [
      "Canal",
      "Tube Well",
      "Drip irrigation",
      "Pond",
      "Groundwater Availability",
      "Rain Water Harvesting system",
      "Dirt Road",
      "Main Road Access",
      "Solar Power System",
      "Wind Power Availability",
      "Electricity Available",
      "Concrete Fencing",
      "Farmhouse",
      "Workers' Accommodation",
    ],

    highlights: [],

    media: [
      {
        url: "https://res.cloudinary.com/gopikrish/image/upload/v1730478060/KovaiRealEstate/property-images/671db6b871a47726cce9249d/agri_1__1__jpg-1730478060241.jpg",
        type: "image/jpeg",
        publicId:
          "KovaiRealEstate/property-images/671db6b871a47726cce9249d/agri_1__1__jpg",
      },
      {
        url: "https://res.cloudinary.com/gopikrish/image/upload/v1730478062/KovaiRealEstate/property-images/671db6b871a47726cce9249d/agri_1__2__jpg-1730478062113.jpg",
        type: "image/jpeg",
        publicId:
          "KovaiRealEstate/property-images/671db6b871a47726cce9249d/agri_1__2__jpg",
      },
      {
        url: "https://res.cloudinary.com/gopikrish/image/upload/v1730478061/KovaiRealEstate/property-images/671db6b871a47726cce9249d/agri_1__3__jpg-1730478063624.jpg",
        type: "image/jpeg",
        publicId:
          "KovaiRealEstate/property-images/671db6b871a47726cce9249d/agri_1__3__jpg",
      },
      {
        url: "https://res.cloudinary.com/gopikrish/image/upload/v1730478063/KovaiRealEstate/property-images/671db6b871a47726cce9249d/agri_1__4__jpg-1730478063635.jpg",
        type: "image/jpeg",
        publicId:
          "KovaiRealEstate/property-images/671db6b871a47726cce9249d/agri_1__4__jpg",
      },
    ],

    thumbnailIndex: 0,

    propertyAddress: "1/305, North St",
    nearbyLandmark: "Near by airport",
    city: "Thanjavur",
    state: "Tamil Nadu",

    description:
      "Situated on 10 acres of fertile land, this organic farm is fully equipped with an advanced irrigation system that ensures efficient water distribution across the entire property...",

    zipCode: "641409",
    user: users[1]._id,
  },
  {
    propertyTitle: "Commercial Office Space",
    propertyType: "Commercial",
    propertyStatus: "For Rent",
    status: "approved",
    price: 75000,

    location: {
      type: "Point",
      coordinates: [76.963452, 11.002321],
    },

    bathrooms: 2,
    yearOfBuilt: 2020,
    possessionDate: new Date("2024-12-01"),
    buildUpArea: "3000 sq ft",
    parkingSpaces: 2,
    plotArea: "2500 sq ft",
    floorNumber: 10,

    otherFeatures: ["Power Backup", "Lift", "24x7 Security"],
    highlights: [],

    media: [
      {
        url: "https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg",
        type: "image/jpeg",
        publicId: "property_4",
      },
    ],

    thumbnailIndex: 0,

    propertyAddress: "RS Puram",
    nearbyLandmark: "Main Road",
    city: "Coimbatore",
    state: "Tamil Nadu",

    description:
      "Well-located commercial space suitable for offices and startups.",

    zipCode: "641002",
    user: users[3]._id,
  },
];
