import {asyncHandler} from "../utils/asyncHandler.js";


const registerUser = asyncHandler(async(req,res)=>{
  //get user from frontend
  //validation-not empty
  //check if user already exists:username,email
 //check for images ,check for avatar
 //upload them to cloudinary
  //creat user object=creat entry in db
  //remove password and refresh token field from response
  //check for user creation 
  //return response

 const {fullName,email,username,password}= req.body
 console.log("email: ",email);


  
})



export{registerUser,}