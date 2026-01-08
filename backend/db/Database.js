import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      bufferCommands: false,
      autoIndex: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`Error connection to MongoDB: ${err.message}`);
    });
};

export default connectDatabase;
