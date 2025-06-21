import express from "express";
import {Service} from "../models/Service"

const router = express.Router();

// GET all services
router.get("/", async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

// POST a new service
router.post("/", async (req, res) => {
  try {
    const newService = new Service(req.body);
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred." });
    }
  }
});

export default router;
