const express = require("express");

const router = express.Router();

//create user
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);

//get user list
router.get(
    "/list",
    validate(userValidation.getUserList),
    userController.getUserList
);

//
router.put(
    "/update-details/:userId",
    validate(userValidation.updateDetails),
    userController.updateDetails
);

//
router.delete(
    "/delete-user/:userId",
    validate(userValidation.getDetails),
    userController.deleteUser
);

module.exports = router;


