const Author = require("../controllers/author.controller");

module.exports = (app) => {
    app.post("/api/authors", Author.create);
    app.get("/api/authors", Author.getAll);
    app.get("/api/authors/:id", Author.getOne);
    app.put("/api/authors/:id", Author.update);
    app.delete("/api/authors/:id", Author.delete);
}