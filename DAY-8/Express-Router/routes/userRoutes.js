// creating Router
const express= require("express");
const router = express.Router();    //this creates router object

router.get('/', (req,res)=>{
    res.send("All Users")
})
router.get("/profile",(req,res)=>{
res.send("UserProfile")
});



// Thinking Task 1

router. get("/login", (req,res)=>{
    res.send("login");
});

// wht URL should you visit in the browser
// answer: localhost:3000/users/login
// ------------------------------------------------------------------------------------------------------------
// Thinking Task 2
// if i change     app.use ("/users",userRoutes) to   app.use("/account", userRoutes);
// Without changing anything inside userRoutes.js, what will the URL for the login route become?
// Explain why

// answer:localhost:3000/account/login
// explain why -> beacue we changes the prefix and in placeof user we did  account now account will take
// to same place where user/login took us  because the userRoutes is same not changed
// ------------------------------------------------------------------------------------------------------------------
// THINKING TASK-3
/**
 * what do you think will happen if you write
 * const router = express.Router();
 * but forgot 
 * module.exports= router;
 * whAT ERROR OR BEHAVIOUR DO YOU EXPECT WHEN SERVER.JS tries to  
 * require(".routes/userRoutes ")
 * 
 * answer: the require("./routes/userRoutes") does not receive the router object 
 * so "userRoutes" becomes an empty object ({}) , not a router   the express tries to do 
 * app.use("/users",{});    
 * but app.use() expects a middleware function or router, not an empty object
 * 
//  * we will get error like
 * 
//  *  TypeError: Router.use() requires a middleware function but got a Object
 * 
 * 
 * 
 * 
 */



module.exports = router;