const mongoose = require("mongoose")

const newDataSchema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        unique:true
            },
    phonenumber:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    cpassword:{
        type:String
    }

})

const Register = new mongoose.model("Register", newDataSchema);
module.exports = Register