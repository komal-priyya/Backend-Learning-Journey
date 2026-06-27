//  Express Responsw object


// task -1  create a route "/about"  return learning backend day-6 use res.send()

const express= require("express");

const app= express();

app.get("/about", (req,res)=>{
    res.send("Learning Backend Day 6")
})

// Task-2 create a route return  {"name": "Komal","course": "Backend"}   use res.json
 app.get("/student", (req,res)=>{
    res.json({
  "name": "Komal",
  "course": "Backend"
})
})

// Task-3 create a route /error return user Not found with status

app.get("/error",(req,res)=>{
    res.status(404).send("User Not Found");
});

// Task-4 create a route   /created with status code 201
app.get("/created",(req,res)=>{
    res.status(201).send(" Created Successfully ");
});
// Task-5 create a route /profile   return HTML heading   <h1>Welcome to My Profile</h1>

app.get("/profile", (req,res)=>{
    res.send("<h1>Welcome to My Profile</h1>")
})

// Task-6 create a middleware called logger it should print "Request received"

function logger(req,res,next){
    console.log("Request Received")
    next()
}

app.get("/get",logger,(req,res)=>{
    res.send("Request Received")
})
// Task-7 create a middle ware called timeLogger Priin the current Time for every request 
function timeLogger(req,res,next){
const currentTime = new Date().toLocaleTimeString();
console.log("Request Received")
console.log(currentTime)
next()

}

app.use(timeLogger)
app.get("/route", (req,res)=>{
    res.send("currenttime")
})

// -----------------------------------
 /*Task-8 
what is wrong with this code
app.listen(3000,()=>{
    console.log("server is running")
})


app.get("/", (req, res) => {

    console.log("Hello");

 }); */

//  answer is that  browser is still waiting  for a response
//  because there is no res.send()
//  so it keeps loading forever (or until it eventually times out)
// ---------------------------------------------------
// Task 10 (Thinking Task)
// Can middleware send a response instead of calling next()?
// If yes:
// What happens to the route handler?
// Why?

// answr: middleware can send response but after that route handlwe doesnt Worker
// but wht doesnt the route handler run?
// aswr: because the middleware has already sent the response 
// ans as the rule say "one request=oneresponse"