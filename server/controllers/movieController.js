import Movie from "../models/Movie.js";

export const createMovie = async  (req,res) =>{
    try {
        const movie = await Movie.create(req.body)
        res.status(201).json({movie})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getAllMovie = async (req,res)=>{
    try {
        const allMovie = await Movie.find(req.body)
        res.status(201).json({allMovie})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const updateMovie = async (req,res)=>{
    try {
        const updated = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({updated})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteMovie = async (req,res)=>{
    try {
        const deleted = await Movie.findByIdAndDelete(req.params.id)
        res.status(201).json({deleted})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}