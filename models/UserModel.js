const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema  = require('../schema/UserSchema');


module.exports = mongoose.model("User", userSchema);