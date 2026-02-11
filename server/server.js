import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import cors from "cors"
import movieRoute from "./routes/movieRoute.js"

dotenv.config()
const app = express();
app.use(express.json())
app.use(cors())
app.use("/api/",movieRoute)

const startServer = async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => console.log(`server is running on post http://localhost:${process.env.PORT}`));
    } catch (error){
        console.error("Error starting the server", error)
    }
};

startServer()