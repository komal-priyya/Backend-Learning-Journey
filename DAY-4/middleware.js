// DAY-4

// middleware for specific role
const express= require("express")
const app= express(); 

function logger(req,res,next){
  console.log("logger");
  next();
}



app.get("/profile", logger,(req,res)=>{
    res.send("Profile Page")
})
// now middleware runs only for /profile



// multiple middleware

function first(req,res,next){
    console.log("first")
    next();
}
function second(req,res,next){
    console.log("second")
    next();
}

app.get("/call",first,second,(req,res)=>{
    res.send("DONE")
})




// Adding Data to req

function useMiddleware(req,res,next){
    req.user="komal";
    next();
}

app.get("/",useMiddleware,(req,res)=>{
    res.send(`hello  ${req.user}`)
});
// hello komal


// Task-1  create middleware tht prints "welcome user " before every
// request


function userWelcome(req,res,next){
    console.log("welcome user")
next();
};

app.get("/user", userWelcome,(req,res)=>{
    res.send("user page")
})

// userpage


// Task-3 create middleware tht prints  GET/about  when visistes /about

function aboutMiddleware(req,res,next){
    console.log(req.method,req.url)

next();
}
app.get("/about",aboutMiddleware,(req,res)=>{
    res.send(req.method + " " +req.url)
      

})

// GET /about

// TASK-3  add req.country= "India";  inside middleware display it 
// onw browser  expected:    Country: India


function countryMiddleware(req,res,next){
    req.Country= "India"
    next();
}

app.get("/country", countryMiddleware,(req,res)=>{
    res.send(`Country :  ${req.Country}`)
})

// challenge 
// create middleware called isAdmin 
// if url contains /admin?role=admin allow access 
// output: welcome admin 
// otherwise Access Denied

function isAdmin(req,res,next){
    if (req.query.role== "admin"){
console.log("Welcome Admin")
next();
    }
    else{
        console.log("Acess Denied")
        res,send("Access Denied")
    }
next()
}
app.get("/admin", isAdmin,(req,res)=>{
    res.send("welcome admin")
})





app.listen(5000,()=>{
    console.log("server is running")
})