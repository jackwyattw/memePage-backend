// Dependencies
const express = require("express");
const cors = require("cors");

// JSON
const posts = require("./posts.json");
const memes = require("./memes.json");

const app = express();

// cors Middleware
app.use(cors());

// Home info route
app.get('/', (req, res) => {
    res.send("Hello Wrld")
})

// Posts info route 
app.get("/posts", (req, res) => {
    res.json(posts)
})

// Memes info route
app.get("/memes", (req, res) => {
    res.json(posts)
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

