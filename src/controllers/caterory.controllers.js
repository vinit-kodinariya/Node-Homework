const Category = require("../models/category.model");
const { categoryService } = require("../services");

/** create caterory */
const createCategory = async (req, res) => {
    try {
        // const reqBody = req.body;
        const user = Category.find

        res.status(200).json({
            success: true,
            message: "Caterory create successfully!",
            data: { user: user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = createCategory;