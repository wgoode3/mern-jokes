const Jokes = require("../controllers/joke.controller");


module.exports = app => {
    app.get("/api/jokes", Jokes.getAll);
    app.post("/api/jokes", Jokes.create);
    app.get("/api/jokes/random", Jokes.random);
    app.delete("/api/jokes/:_id", Jokes.delete);
    app.put("/api/jokes/:_id", Jokes.update);
    app.get("/api/jokes/:_id", Jokes.getOne);
}