import { Router } from "express";
import registerUserw from "../controllers/user.controller.js";
const router = Router();

// router.route("/register").post(registerUser)
//router.route("/login").post(login)

// changes made by Naman
router.post("/register", registerUserw);
router.get("/sayHello", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});

export default router;
