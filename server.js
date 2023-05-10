const express = require("express");
const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get("/about", (req, res) => {
    res.send("<p>Why are you here? .·´¯`(>▂<)´¯`·. </p>")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000.")
});