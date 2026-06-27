// multiple middleware chain

const express= require("express");

const app= express();

function logger(req,res,next){
    console.log("logs request");
    next();
}
function authChecker(req,res,next){
    console.log("logged in" );
    next();
}

function requestTime(req,res,next){
    console.log("adds timestamp")
}


app.get("/click" ,logger,authChecker,requestTime,(req,res)=>{
    res.send("three middleware ")
})



// apply one  middleware globally


function authCheck(req,res,next){
    console.log("logged in" );
    next();
}

app.use(authCheck)
app.get("/click" ,(req,res)=>{
    res.send("three middleware ")
})
app.get("/get" ,(req,res)=>{
    res.send("three middleware ")
})



app.listen(3000,()=>{
    console.log("server is running")
})