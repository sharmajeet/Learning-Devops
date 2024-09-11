const express = require("express");
const app = express();
const mongo = require("./connection");
const prompt = require('prompt')
const InsertUser = require("./Functions/InsertUser");
mongo;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/user", InsertUser);

app.get("/", (req, res) => {
    res.send("Welcome to my Docker based testing purpose Db connection application.")
})

app.listen(3000, () => {
    console.log("App is live on port 3000.")
})