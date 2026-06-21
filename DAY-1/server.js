const express = require("express");
const app = express();


// Task-1
app.get("/",(req,res)=>{
    res.send("Home Page");
});
app.get("/about", (req,res)=>{
    res.send("About Page");
});
app.get("/contact", (req,res)=>{
    res.send("Contact Page");
});

app.get("/profile", (req,res)=>{
    res.send("Profile Page");
});

// Task-2
app.get("/skills",(req,res)=>{
  res.send("HTML <br> CSS <br> JavaScript");
});

// Task-3
app.get("/hobbies",(req,res)=>{
  res.send(`
Reading 
Painting  
Singing
`);
});

// challenge 1
app.get("/favorite-language",(req,res)=>{
    res.send("My favorite language is javascript")
})


// challenge-2
app.get("/user",(req,res)=>{

    const obj={
        "Name": "Komal Priya",
"Goal": "Backend Developer",
"Country": "India"
    }
  res.send(`
Name: ${obj.Name}
Goal: ${obj.Goal}
Country: ${obj.Country}
`);

});

app.listen(5000,()=>{
    console.log("Server Running");
});








