const mongoose = require("mongoose")
const previousOrderSchema = new mongoose.Schema({
    orderId: { type: String, required: true },
    dateOfOrder: { type: Date, required: true },
    amount: { type: Number, required: true },
});
const PreviousOrder = mongoose.model("PreviousOrder", previousOrderSchema);
module.exports = PreviousOrder;