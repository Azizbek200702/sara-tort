const mongoose = require("mongoose")

const listSchema = mongoose.Schema({
    products : {
        type : [Object],
        required :true
    },
    date : {
        type : String,
        required :true
    },
    total : {
        type : Number,  
        required :true
    },
}, { timestamps: true, versionKey: false })

const List = mongoose.model("list" , listSchema)
module.exports = List