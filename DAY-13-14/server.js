require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db.js");
const cookieParser = require("cookie-parser");

const userRoutes= require("./routes/userRoute.js")

const app = express();
connectDB();


app.use(express.json());
app.use(cookieParser());


app.use("/api/users", userRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});