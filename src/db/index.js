import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";




const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`\n MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1);
    }
}

/*
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://manjit:manjit@cluster0.qvhc7g3.mongodb.net/sample_mflix`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log(`\n MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}
*/
export default connectDB;
