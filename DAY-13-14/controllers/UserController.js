const User= require("../models/user.js");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken")
const register= async(req,res)=>{
    try{
    const{name,email,password}= req.body;

if(!name || !email || !password){
    

    return res.status(400).json({
        success:false,
        message:"All fields are required"

    });
}
const hashedPassword = await bcrypt.hash(password, 10);
    const user= await User.create({
          name,
            email,
            password:hashedPassword
           
        });
          return res.status(201).json({
            success: true,
            message: "user created successfully",
            data: user
        });
    } catch(error){
        return res.status(500).json({
            success:false,
            message:error.message      
          });

    }
    };



    const login= async (req,res)=>{
        try{
        const{email,password}=req.body;



        if(!email || !password){

    return res.status(400).json({
        success:false,
        message:"All fields are required"

    });
        }
     const user = await User.findOne({email});
     if(!user){
        return res.status(400).json({
            success:false,

            message:"User not found"       
         });
    }





 const isMatch = await bcrypt.compare(password, user.password);

 if(!isMatch){
    return res.status(400).json({
        success:false,
        message:"Invalid credentials"
    })
 }

 const token = jwt.sign(
    {
        id: user._id
    },
    process.env.JWT_SECRET_KEY,
    {
        expiresIn: "7d"
    },
  

 )
   res.cookie("token",token,{
        httpOnly:true,
        maxAge:7*24*60*60*1000
    })
    return res.status(200).json({
        success:true,
        message:"Login Succesful",
        token
    })
    
        }
        catch(error){
            return res.status(500).json({
                success:false,
                message:error.message
            })
        }

    }

const getAllUsers= async (req,res)=>{
    try{
    const users= await User.find()
    
     return res.status(200).json({
            success: true,
            data: users
        });

}catch(error){
return res.status(500).json({
    success:false,
    message:error.message
})
}}
const getUser= async (req,res)=>{
    try{
    const user= await User.findById(req.params.id)
    
     return res.status(200).json({
            success: true,
            data: user
        });
}catch(error){
return res.status(500).json({
    success:false,
    message:error.message
})
}}
const deleteUser = async (req,res)=>{
    try {
        const user= await User.findByIdAndDelete(req.params.id)


        if(!user){
            return res.status(400).json({
                success:false,
                message:" user not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"user deleted successfully",
            data:user
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
        
    }
}
module.exports= {
    register,
    login,
    getAllUsers,
    getUser,
    deleteUser
};