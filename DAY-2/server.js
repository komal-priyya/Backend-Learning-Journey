const express = require("express");
const app = express();

// Task1
app.get("/products", (req,res)=>{
    res.send("ALL products")
})

// Task2 
app.post("/products", (req,res)=>{
    res.send("product created")
})

// Task 3 
app.put("/products", (req,res)=>{
    res.send("products are updated")
})

// Task4
app.delete("/products", (req,res)=>{
    res.send("product deleted")
})



// challenge 1 student API 

app.get("/students", (req,res)=>{
    res.send("All students")

});

app.post("/students", (req,res)=>{
    res.send("new student added")

});

app.put("/students", (req,res)=>{
    res.send("student updated")

})
app.delete("/students", (req,res)=>{
    res.send("student deleted")


})

app.listen(5000,()=>{
    console.log("server is running ")
})

