import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  url: { type: String, required: true },
  type: {
    type: String,
    enum: ["image/jpeg", "image/png", "video/mp4"],
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
});

const propertySchema = new mongoose.Schema(
  {
    /* ------------------------------ //BASIC INFO ------------------------------ */

    propertyTitle: {
      type: String,
      required: true,
      trim: true,
    },
    propertyType: {
      type: String,
      enum: ["House", "Agriculture", "Residential Plot", "Commercial"],
      required: true,
    },
    propertyStatus: {
      type: String,
      enum: ["For Sale", "For Rent"],
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },

    /* ------------------------------- //LOCATION ------------------------------- */

    propertyAddress: {
      type: String,
      trim: true,
    },
    nearbyLandMark: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    zipCode: {
      type: String,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number], //longitude, latitidue order matters
        required: true,
      },
    },

    /* --------------------------------- //MEDIA -------------------------------- */

    media: {
      type: [mediaSchema],
      default: [],
    },
    thumbnailIndex: {
      type: Number,
      default: 0,
    },

    /* --------------------------------- //HOUSE -------------------------------- */

    bedrooms: Number,
    bathrooms: Number,
    buildUpArea: String,
    furnishing: String,
    yearOfbuilt: Number,
    parkingSpaces: {
      type: Number,
      min: 0,
      default: undefined,
      required: function () {
        return (
          this.propertyType === "House" || this.propertyType === "Commercial"
        );
      },
    },

    /* ------------------------------ //AGRICULTURE ----------------------------- */
    sizeOfLand: String,
    soilType: String,
    landUse: String,
    waterSource: {
      type: Boolean,
      default: undefined,
      required: function () {
        return this.propertyType === "Agriculture";
      },
    },
    fencing: {
      type: Boolean,
      default: undefined,
      required: function () {
        return this.propertyType === "Agriculture";
      },
    },
    accessToRoad: String,
    pastYield: String,
    topography: {
      type: String,
      enum: [
        "Flat",
        "Hilly",
        "Undulating",
        "Rolling",
        "Slopped",
        "Level",
        "Mountainous",
        "Valley",
        "Plain",
        "Rocky",
      ],
    },
    /* --------------------------- //RESIDENTIAL PLOT --------------------------- */
    plotArea: {
      type: String,
      default: undefined,
      required: function () {
        return (
          this.propertyType === "Residential Plot" ||
          this.propertyType === "commercial"
        );
      },
    },

    plotFacing: String,
    plotWidth: String,
    plotLength: String,
    zoningType: String,
    possessionDate: Date,

    /* ------------------------------ //COMMERCIAL ------------------------------ */

    floorNumber: Number,
    buildingAge: String,

    /* -------------------------------- // EXTRA -------------------------------- */

    otherFeatures: {
      type: [String],
      default: [],
    },
    highlights: {
      type: [String],
      default: [],
    },

    /* --------------------------------- //USER --------------------------------- */

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

propertySchema.index({ location: "2dsphere" });

const Property = mongoose.model("Property", propertySchema);
export default Property;
