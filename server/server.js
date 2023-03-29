const express = require("express");
const port = 8000;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("./config/mongoose.config")
require("./routes/author.routes")(app);


app.listen(port, () => console.log(`Listening on port: ${port}`))