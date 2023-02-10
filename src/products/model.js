const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    price : {
        type : Number,
        required :true
    },
    description : {
        type : String,
        required :true
    },
    media : {
        type : [String],
        required :true
    },
    id : {
        type : Number,
        required :true
    },
    quantity : {
        type : String,
        required :true
    },
    sellPrice : {
        type : String,
        default :null
    }
}, { timestamps: true, versionKey: false })

const Product = mongoose.model("product" , productSchema)
module.exports = Product