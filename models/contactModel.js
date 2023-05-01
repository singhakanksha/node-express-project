const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "please add the conatct name"]
    },
    email: {
        type: String,
        required: [true, "please add the conatct email address"]
    },
    phone:{
        type: String,
        required: [true, "please add the phone number"]
    }
}, {timeStamps: true})

module.exports = mongoose.model('Contacts', contactSchema)