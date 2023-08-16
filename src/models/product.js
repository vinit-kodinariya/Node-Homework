const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true
        },
        product_price: {
            type: number,
            trim: true
        },
        product_desc: {
            type: String | number,
            trim: true
        },
        is_active: {
            type: Boolean,
            trim: true
        },
    },
    {
        timestamps:true,
        versionkey:false
    }
)

const product = mongoose.model("product", productSchema);
module.exports = product