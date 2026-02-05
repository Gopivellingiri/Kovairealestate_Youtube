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
const allowedOrigins = [
  "http://localhost:5173",
  "https://realestatekovaiweb.netlify.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin) || origin.endsWith(".netlify.app")) {
        return callback(null, true);
      }

      callback(null, false);
    },
    credentials: true,
  }),
);

// main route definition
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/properties", propertyRoutes);

app.use(errorMiddleware);

export default app;
