
const UserController= require("../controllers/UserController.js")
const express = require("express");
const router= express.Router();



const {register,getAllUsers,getUser}= require("../controllers/UserController.js")

router.post("/users",register);
router.get("/users",getAllUsers)
router.get("/users/:id",getUser)
module.exports= router;