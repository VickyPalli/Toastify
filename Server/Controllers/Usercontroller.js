
const User = require("../Models/Usermodel")
const bcrypt = require("bcrypt")

module.exports.register = async(req,res,next)=>{
  try{
    const {username , email , password} = req.body;
    const usernameCheck = await User.findOne({username})
    if(usernameCheck){
     return res.json({msg : "Username Already Used",status : false})
    }
 
    const emailCheck = await User.findOne({email})
 
    if(emailCheck){
     return res.json({msg : "Email Already Used",status : false})
    }
 
    const hashpassword = await bcrypt.hash(password,10);
 
    const user = await User.create({
     username,
     email,
     password : hashpassword
    })
 
    delete user.password ;
    return res.json({status : true , user})
  }catch(error){
    next(error)
  }
}



module.exports.login = async(req,res,next)=>{
  try{
    const {username ,password} = req.body;
    const usernameCheck = await User.findOne({username})
    if(!usernameCheck){
     return res.json({msg : "Invalid Username or Password",status : false})
    }
    const ispassword = await bcrypt.compare(password , usernameCheck.password)
    if(!ispassword){
      return res.json({msg : "Invalid Username or Password",status : false})
    }
 
 
    delete usernameCheck.password ;
    return res.json({status : true , user : usernameCheck})
  }catch(error){
    next(error)
  }
}