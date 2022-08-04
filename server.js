const express = require("express");
const app = express();
const articles = require('./Mongoose/mongoFunction');

app.use(express.json());

app.listen(5500)

app.use("/articles", articles);

app.get("/", (req, res)=>{
    res.send("Temporary Route")
})






