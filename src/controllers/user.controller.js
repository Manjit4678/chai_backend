import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  console.log("this router is successfully hit by the browser");
  //get user from frontend
  //validation-not empty
  //check if user already exists:username,email
  //check for images ,check for avatar
  //upload them to cloudinary
  //creat user object=creat entry in db
  //remove password and refresh token field from response
  //check for user creation
  //return response

  const { fullName, email, username, password } = req.body;
  console.log("email: ", email);
  res.status(200).json({ email, fullName });
});

export default registerUser;
