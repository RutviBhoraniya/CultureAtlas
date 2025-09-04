const express = require("express");
const router = express.Router();
const { getAllUsers, getUser, signUp, login, deleteUser } = require("../controler/userControls");

// get all user
router.get("/", getAllUsers);

// get user by id
router.get("/:id", getUser);

// add user
router.post("/signUp", signUp);

// find user for login
router.post("/login",login)

// delete user
router.delete("/:id",deleteUser)

module.exports = router;