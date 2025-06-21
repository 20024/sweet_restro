const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

import { Request, Response } from "express";
import Service from "./routes/Service";

const app = express();
app.use(cors());
app.use(express.json());

console.log("Connecting to MongoDB at:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI || "")
  .then(() => console.log("MongoDB connected"))
  .catch((err: unknown) => {
    if (err instanceof Error) {
      console.error("MongoDB connection error:", err.message);
    } else {
      console.error("Unknown MongoDB connection error.");
    }
  });
//Route 
app.use("routes/Service", Service);

// Test Route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Backend is Running" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
