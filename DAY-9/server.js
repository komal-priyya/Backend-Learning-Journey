

// DAY-9  Request Body (req.body) & express.json()

const { request } = require("express")

// Part1 - The Problem
/*Imagine Instagram.

User enters

Username
Password
Email
Age

Question:

How should we send all this data?

Option A

/login?username=komal&password=123456

Option B

Send it inside the request body.

🤔 Challenge 1

Which option is better?

And why?
*/
// Answer: -> If we send this data through URL its gnna be messy and less Secure 
//  -> login credentials should not be placed in url  because it can be stores in browser history 

// Part2 The joutney of Request 

/*Frontend
    │  
    ▼ 
creates HTTP request
    │  
    ▼ 
Node.js (receives raw HTTP request)
    │  
    ▼ 
Express (matches routes, runs middleware)
    │  
    ▼     
express.json()  (read raw  body, converts JSON ->javasript 
                  object , adds it to req.body, enhances the req obj)
    │  
    ▼ 
route handler 
    │  
    ▼   
uses req.body
    │  
    ▼  
sends response response with res
    │  
    ▼ 
Frontend    */
// ------------------------------------------------------------

// 
//Challenge 2

/*
What happens if we remove:

app.use(express.json());

Now the code is:

const express = require("express");
const app = express();

app.post("/city", (req, res) => {
    console.log(req.body);
    res.send(req.body.city);
});

Postman still sends:

{
    "city":"Delhi"
}
Predict:
What does console.log(req.body) print?
What happens when JavaScript executes:
req.body.city
Does Postman receive "Delhi" or does the server throw an error?

Explain why, not just the answer. */

    // ANSWER:  1-> the console.log(req.body) prints undefined because 
    // the  and because XPathExpression.json is not used because it converts the raw JSon Data 
    // into javascipt object  and express can understand the JSON 

    // 2-> when js executes req.body.city  udefines undefines because no express.json() mean no parsed data in req.body
    // 3->  the server theows error


    // ------------------------------------------------------
//     challenge 2

// ->Postman sends

// {
//     "city":"Delhi"
// }

// Code

// app.post("/city",(req,res)=>{

//     console.log(req.body);

//     res.send(req.body.city);

// });


// What prints in console?
// What response comes back?
// Answer: 1->  {
//     city:"Delhi"
// }   GETS PRINT IN THE CONSOLE
// 2->  Delhi comes back as response 


// ---------------------------------
/*Mini Project 1

Create

POST /student

Body

{
    "name":"Komal"
}

Response

Welcome Komal */

// answer: 
 
const express= require("express");
const app= express();
app.use(express.json());
app.post("/student",(req,res)=>{
    res.send(`welcome ${req.body.name}`);
})



// MINI PROJECT 2 

/*Create
POST /square

Body

{
    "number":8
}

Response
64
*/


app.post("/square",(req,res)=>{
    let x= req.body.number
    res.send(`${x*x}`)
})


/*Mini Project 3

Create
POST /movie
Body

{
    "title":"Interstellar"
}

Response
Movie Added: Interstellar
*/


app.post("/movie",(req,res)=>{
 
    res.send(`Movie Added: ${req.body.title}`)
})










/*Thinking Challenge 

Suppose Postman sends

{
    "a":20,
    "b":10
}

/*Route

app.post("/sum",(req,res)=>{

});
Without writing code answer:

Where is

20
stored?

Where is
10

stored?
How would you access them?*/
// Answer: we can access a and b by req.body.a req.body.b


app.post("/sum",(req,res)=>{
let a= Number(req.body.a)
let b= Number(req.body.b)
res.send(`sum : ${a+b}`)
});







/*Debugging Challenge

Find the mistake.

const express=require("express");

const app=express();

app.post("/hello",(req,res)=>{

res.send(req.body.name);

});

app.listen(3000);

Why will this not work?   */

// Answer:  in this code the app.use(express.json() ) is not used so  When  we did  res.send(req.body.name) it will give undefined 
app.listen(3000,()=>{
    console.log("server is running")
})