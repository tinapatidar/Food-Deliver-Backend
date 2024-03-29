const express = require("express")
const router = express.Router();
const Restaurant = require("./restaurantSchema")
const PreviousOrder = require("./previousOrderSchema")
router.get("/restaurants", async (req, res) => {
    try {
        // Use the 'find' method of the 'Restaurant' model to retrieve all restaurants
        const restaurants = await Restaurant.find({});
 
        // Send the retrieved restaurants as a JSON response
        res.json(restaurants);
    } catch (error) {
        // Handle any errors that may occur during the process and send a 500 Internal Server Error response
        res.status(500).json({ error: error.message });
    }
});
 
// Endpoint to retrieve previous orders
router.get("/previousOrders", async (req, res) => {
    try {
        const orders = await PreviousOrder.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
// Endpoint to save order data
router.post("/previousOrders", async (req, res) => {
    try {
        const { orderId, dateOfOrder, amount } = req.body;
 
        console.log(orderId, dateOfOrder, amount);
 
        const newOrder = new PreviousOrder({
            orderId,
            dateOfOrder: new Date(dateOfOrder),
            amount,
        });
 
        await newOrder.save();
        res.status(201).json({ message: "Dummy order saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
 

module.exports = router;