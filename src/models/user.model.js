const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        password: {
            type: String,
        },
        is_active: {
            type: String,
            trim: true
        }
    },
    {
        timestamps:true,
        versionkey:false
    }
)

const User = mongoose.model("user", userSchema);
module.exports = User;
