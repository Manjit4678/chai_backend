import {asyncHandler} from "../utils/asyncHandler.js";
import{apiError} from "../utils/apiError.js";
import {User} from "../models/user.model.js";
import {uploadOnCloudinary, UploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

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

if(
  [fullName,email,username,password].some((field)=>
    field?.trim()==="")
){
  throw new  apiError(400,"All fields are required");

}

const exitedUser= User.findOne({
  $or:[{username},{email}]
})

if(exitedUser){
  throw new apiError(409,"user with email or username already exists")
}

const avatarLocalPath = req.files?.avatar[0]?.path
const coverImageLocalPath =   req.files?.coverImage[0]?.path;

if(!avatarLocalPath){
  throw new apiError(400,"Avatar file is required")

}

const avatar = await uploadOnCloudinary(avatarLocalPath)
const coverImage = await uploadOnCloudinary(coverImageLocalPath)

if(!avatar){
  throw new apiError(400,"Avatar file is required")
}
  
const user = await User.create({
  fullName,
  avatar:avatar.url,
  coverImage:coverImage?.url || "",
  email,
  password,
  username: username.toLowecase()                                                                                                                                                                                                                                                                                                                              
})

await User.findById(user._id).select(
  "-password -refreshToken"
)
if(!createdUser){
  throw new apiError(500,"Something went wrong while registering the user")
}


return res.status(201).json(
  new ApiResponse(200,createdUser,"User registered successfully ")
)

})



export{registerUser,}