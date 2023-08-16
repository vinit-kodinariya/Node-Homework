const express = require("express");
const tokenRoutes = require("./token.route");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
// router.use("/token", tokenRoutes);

module.exports = router;