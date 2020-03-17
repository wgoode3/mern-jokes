const mongoose = require("mongoose");
const Joke = require("../models/joke.model");


class JokeController {
    getAll(req, res) {
        Joke.find({})
            .then(jokes => res.json(jokes))
            .catch(err => res.json(err));
    }
    getOne(req, res) {
        Joke.findOne({_id: req.params._id})
            .then(joke => res.json(joke))
            .catch(err => res.json(err));
    }
    create(req, res) {
        let newJoke = new Joke(req.body);
        newJoke.save()
            .then( () => res.json({msg: "joke added"}) )
            .catch( err => res.json(err) );
    }
    delete(req, res) {
        Joke.findByIdAndDelete({_id: req.params._id})
            .then(() => res.json({msg: "joke didn't land"}))
            .catch(err => res.json(err));
    }
    update(req, res) {
        Joke.findByIdAndUpdate({_id: req.params._id}, req.body, {
            runValidators: true
        })
            .then(() => res.json({msg: "joke did land"}))
            .catch(err => res.json(err));
    }
    random(req, res) {
        Joke.find({})
            .then(jokes => {
                let rI = Math.floor(Math.random()*jokes.length);
                res.json({joke: jokes[rI]});
            })
            .catch(err => res.json(err));
    }
}

module.exports = new JokeController();