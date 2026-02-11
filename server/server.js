import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import cors from "cors"

dotenv.config()
const app = express();

const startServer = async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => console.log(`server is running on post http://localhost:${process.env.PORT}`));
    } catch (error){
        console.error("Error starting the server", error)
    }
};

startServer()