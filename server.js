const express = require("express");
const app = express();
// const articles = require('./Mongoose/mongoFunction');

app.use(express.json());

app.listen(process.env.PORT ||5000;)

app.use("/articles", articles);

app.get("/", (req, res)=>{
    res.send("Temporary Route")
})
// const http = require('http');
// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });
