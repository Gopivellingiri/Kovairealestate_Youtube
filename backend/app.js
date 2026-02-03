import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import errorMiddleware from "./middleware/error.js";
import userRoutes from "./routes/userRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// main route definition
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/properties", propertyRoutes);

app.use(errorMiddleware);

export default app;
