const express = require("express");
const categoryController = require("../../controllers/caterory.controllers");
const validate = require("../../middlewares/validate");
const categoryValidation = require("../../validation/category.validation")

const router = express.Router();

//create category
router.post(
    "/create-category",
    validate(categoryValidation),
    categoryController
);


module.exports = router;


