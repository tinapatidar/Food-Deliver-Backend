const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const seedData = require("./seedData")
const Restaurant = require("./restaurantSchema")
const PreviousOrder = require("./previousOrderSchema")
const restaurantRoutes = require("./restaurantRoutes")

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api",restaurantRoutes)
const seedDatabase = async () => {
    try {
        await Restaurant.deleteMany(); // Clear existing data
        await Restaurant.insertMany(seedData);
        console.log("Database seeded successfully.");
    } catch (error) {
        console.error("Error seeding the database:", error.message);
    }
};
 
// Seed data when the server starts
seedDatabase();
 

mongoose.connect("mongodb://localhost:27017/food-delivery",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("Error while Connection with DB", err)
})

app.listen(port , ()=>{
    console.log("Listening to port",port)
})