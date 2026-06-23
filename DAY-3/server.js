
const express= require("express")
const app = express();


// Route parameters
// tASK 1 
app.get("/user/:name",(req,res)=>{
    res.send(req.params.name);
});
// localhost:5000/user/komal



// TASK-2

app.get("/product/:id",(req,res)=>{
    res.send(req.params.id)

});

// localhost:5000/product/25

// challenge 1 
// create - /company/:companyName
app.get("/company/:companyName",(req,res)=>{
    res.send(`welcome to ${req.params.companyName}`)
  
})

// localhost:5000/company/openai





// Query Parameter

// Task-3 
// localhost:5000/search?id=5
app.get("/search",(req,res)=>{
    res.json(req.query)
});


// TASK-4
// localhost:5000/search?name=komal
app.get("/search",(req,res)=>{
    res.send(req.query.name)
})


// challenge-2
// localhost:5000/books?title=atomic-habits
app.get("/books",(req,res)=>{
    res.send(req.query.title)
})
app.listen(5000,()=>{
    console.log("server is running")
});
