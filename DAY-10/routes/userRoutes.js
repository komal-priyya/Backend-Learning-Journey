
const UserController= require("../controllers/UserController.js")
const express = require("express");
const router= express.Router();



const {register,getAllUsers,getUser,deleteUser}= require("../controllers/UserController.js")

router.post("/register",register);
router.get("/allUsers",getAllUsers)
router.get("/users/:id",getUser)
router.put("users/delete/:id",deleteUser)
module.exports= router;