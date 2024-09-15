const mongoose = require('mongoose');
const validator = require('validator');

const userAuthSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: [20, "Name can't exceed 20 character"],
        minLength: [2, "Name should have 2 charcters"],
        required: [true, "Enter your name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
    }]
})

module.exports = mongoose.model("UserAuth", userAuthSchema)