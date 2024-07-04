import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credential: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(cookieParser());

//routes

//routes declaration
app.use("/api/v1/users", userRouter);
app.get("/hello", (req, res) => {
  console.log("hello world");
  res.status(200).json({ message: "Hello there" });
});


//http://localhost:8000/api/v1/users/register

export { app };
