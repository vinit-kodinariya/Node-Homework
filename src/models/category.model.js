const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            trim: true
        },
        category_desc: {
            type: String,
            trim: true
        },
        category_count: {
            type: Number,
            default: 0
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

const category = mongoose.model("category", categorySchema);
module.exports = category
