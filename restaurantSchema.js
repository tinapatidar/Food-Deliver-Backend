const  mongoose = require("mongoose");

const restaurantScheme = new mongoose.Schema({
   name:String,
   image:String,
   menu:[
        {
            name: String,
            price: Number,
            image: String,
        },
    ],
    rating: Number,
})

const Restaurant = mongoose.model("Restaurant",restaurantScheme);
module.exports = Restaurant;
