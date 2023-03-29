const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author's Name is required"],
        minlength: [3, "Author's Name must be at least 3 characters long."]
    }
},{timestamps: true})

module.exports = mongoose.model("Author", AuthorSchema);