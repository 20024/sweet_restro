const mongoose = require("mongoose");
const Sweet = require("./models/Sweet");
const sweetsData = require("../src/app/data/Sweet"); 
require("dotenv").config();

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing sweets
    await Sweet.deleteMany({});

    // Insert sweets from your data
    await Sweet.insertMany(sweetsData);

    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
  }
}

seedDB();
