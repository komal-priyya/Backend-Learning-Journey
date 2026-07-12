const User= require("../models/user.js");

const register= async(req,res)=>{
    const{name,email,password}= req.body;

if(!name || !email || !password){

    return res.status(400).json({
        success:false,
        message:"All fields are required"

    });
}
    const user= await User.create({
          name,
            email,
            password,
           
        });
          return res.status(201).json({
            success: true,
            message: "user created successfully",
            data: user
        });
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
    getAllUsers,
    getUser,
    deleteUser
};