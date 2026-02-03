import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDatabase from "../db/Database.js";
import User from "../model/user.js";
import Property from "../model/Properties.js";
import { users } from "../seeder/dummyUser.js";
import { properties } from "../seeder/dummyProperties.js";

dotenv.config();

const seed = async () => {
  try {
    await connectDatabase();
    await Property.deleteMany();
    await User.deleteMany();
    console.log("Old data removed");
    const createdUsers = await User.insertMany(users);
    console.log("Users seeded");
    const propertyData = properties(createdUsers);
    await Property.insertMany(propertyData);
    console.log(`Properties seeded`);
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seed();
