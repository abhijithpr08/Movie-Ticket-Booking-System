import express from "express"
import { createMovie, deleteMovie, getAllMovie, updateMovie } from "../controllers/movieController.js";

const router = express.Router()

router.post("/create",createMovie)
router.get("/get",getAllMovie)
router.put("/update/:id",updateMovie)
router.delete("/delete/:id",deleteMovie)

export default router