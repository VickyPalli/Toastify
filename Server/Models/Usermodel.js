
const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    username : {
        type : String,
        min : 3,
        max : 20,
        required : true,
        unique : true
    },
    email : {
        type : String,
        max : 30,
        required : true,
        unique : true
    },
    password : {
        type : String,
        min : 8,
        required : true
    },
    isAvatarImageset : {
        type : Boolean,
        default : false
    },
    avatarImage : {
        type : String,
        default : ""
    }
});


module.exports = mongoose.model("users",userschema)