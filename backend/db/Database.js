import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      bufferCommands: false,
      autoIndex: true,
    });
    console.log(`MongoDB connted with server:${conn.connection.host}`);
  } catch (err) {
    console.error(`Error connecting to MongoDb: ${err.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
