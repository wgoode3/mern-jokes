const mongoose = require("mongoose");


const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "jokes need a setup"],
        minlength: [5, "setup must be 5 characters or longer"]
    },
    punchline: {
        type: String,
        required: [true, "jokes need a punchline"],
        minlength: [2, "punchline must be 2 characters or longer"]
    },
}, {timestamps: true});

module.exports = mongoose.model("Joke", JokeSchema);