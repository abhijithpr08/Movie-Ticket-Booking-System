import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    MoveName: {
        type: String,
        required: true
    },
    TheatreName: {
        type: String,
        required: true
    },
    ShowTime: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    TotalSeats: {
        type: Number,
        required: true
    },
    AvailableSeats: {
        type: Number,
        required: true
    },
    TicketPrice: {
        type: Number,
        required: true
    }
})

const Movie = mongoose.model("movies", MovieSchema);

export default Movie;