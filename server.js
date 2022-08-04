const express = require("express");
const app = express();
const articles = require('./Mongoose/mongoFunction');

app.use(express.json());
const port = process.env.PORT || 3000
console.log(`well the port is ${port}`);

app.listen(port)

app.use("/articles", articles);

app.get("/", (req, res)=>{
    res.send("Temporary Route")
})
