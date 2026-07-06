/* Mini Challenge
 create another router 
productRoutes.js
It should respond to:
GET /products
↓
All Products
and
GET /products/details
↓
Product Details
without writing those routes directly in server.js. */


const express = require("express")
const router= express.Router();

router.get("/",(req,res)=>{
    res.send("All Products");
});



router.get("/details",(req,res)=>{
    res.send("Product Details");
});
module.exports= router; 