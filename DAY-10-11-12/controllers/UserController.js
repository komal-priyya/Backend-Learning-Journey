const User= require("../models/user.js");
//register
const register= async(req,res)=>{
    const{name,email,password}= req.body;

if(!name || !email || !password){

    return res.status(400).json({
        success:false,
        message:"All fields are required"

    });
}
const existingUser= await User.findOne({email});
if(existingUser){
    return res.status(400).json({
        success:false,
        message:"User already exists"
    })
}
// hashed pass
const hashPassword = await bcrypt.hash(password,10);
    const user= await User.create({
          name,
            email,
            password:hashedPassword,
           
        });
          return res.status(201).json({
            success: true,
            message: "user created successfully",
            data: user
        });
    }
    // login
    const login= async(req,res)=>{
        const {email,password}=req.body;
        
if(!name || !email || !password){

    return res.status(400).json({
        success:false,
        message:"All fields are required"

    });


    
}

    }
    // getAllUsers
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
// deleteUser
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