const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        required: [true, "role is required"],
        enum: ["Admin", "Organisation", "Donor", "Hospital"],
    },
    name: {
        type: String,
        required: function () {
        if (this.role === "Donor" || this.role === "Admin") {
            return true;
        }
        return false;
        },
    },
    organisationName: {
        type: String,
        required: function () {
          if (this.role === "Organisation") {
            return true;
          }
          return false;
        },
    },
    hospitalName: {
        type: String,
        required: function () {
        if (this.role === "Hospital") {
            return true;
        }
        return false;
        },
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is requied"],
    },
    website: {
        type: String,
    },
    address: {
        type: String,
        required: [true, "address is required"],
    },
    phone: {
        type: String,
        required: [true, "phone number is required"],
    },
}, {timestamps:true});

module.exports = mongoose.model('users', userSchema)