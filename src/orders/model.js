const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    date : {
        type : String,
        required :true
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    products : {
        type : [Object],
        required : true
    },
    price : {
        type : String,
        required : true
    },
    location : {
        type : Object,
        required : true
    },
    status : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    }
}, { timestamps: true, versionKey: false })

const Order = mongoose.model("order" , orderSchema)
module.exports = Order