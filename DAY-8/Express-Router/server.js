const express = require("express");
const app = express();

const userRoutes= require("./routes/userRoutes")

// app.use("/users", userRoutes);
// mini challenge code
const productRoutes= require('./routes/productRoutes')

// Thinking Task  2
// if i change     app.use ("/users",userRoutes) to   app.use("/account", userRoutes);

// Without changing anything inside userRoutes.js, what will the URL for the login route become?
app.use("/account", userRoutes);
// mini challenge code
app.use("/products",productRoutes)


app.listen(3000);






