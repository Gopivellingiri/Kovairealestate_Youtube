import express from "express";
import { getPropertyCards } from "../controllers/propertyController.js";

const router = express.Router();

router.get("/get-propertyCards", getPropertyCards);

export default router;
