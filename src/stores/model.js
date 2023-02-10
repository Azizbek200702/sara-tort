const mongoose = require("mongoose")

const storeSchema = mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "product",
        required :true
    },
    quantity : {
        type : Number,
        required :true
    },
    price : {
        type : Number,  
        required :true
    },
}, { timestamps: true, versionKey: false })

const Store = mongoose.model("store" , storeSchema)
module.exports = Store