const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    lastName : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    phone : {
        type : String,
        required : true
    },
    location : {
        type: Object,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    orders : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "order",
        default: null
    }
}, { timestamps: true, versionKey: false })

const User = mongoose.model("user" , userSchema)
module.exports = User