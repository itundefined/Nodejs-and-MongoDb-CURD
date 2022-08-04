// Connction and function for mongoose

// Connction ----------

const express = require("express");
const router = express.Router();
module.exports = router;
const jwt = require("jsonwebtoken");    
require("dotenv").config();


const mongoose = require("mongoose");
const allarticle = require("./mongoModel")


mongoose.connect(process.env.MOONGOSTRING);


// Route to FETCH and send the all articles from the database 
router.get('/', async (req, res) => {
    try {
        res.json(await allarticle.find())       
    } catch (error) {
        res.status(500).send("something wrong with the database");
    }
}); 


// Route to CREATE the article into databasye
router.post('/', verifying, async (req, res)=>{
        
    let title = req.body.title;
    if(await allarticle.findOne({title}) === null) {
        const client = new allarticle(req.body);
        client.save();
        res.status(200).send("Done!! saved it");
    }
    else{
        res.status(400).send("User Already exist");
    }
})


// Route to UPDATE the article
router.patch('/', verifying, async (req, res)=>{
    try {
        let title = req.body.title;
        const doc = await allarticle.findOne({title});
        await allarticle.updateOne({_id: doc._id}, { $set: { title: req.body.changeTitle, description:req.body.changedescription, richtext:req.body.changerichtext } });
        res.status(200).send("updated");
    } catch (error) {
        res.status(500).send("some database issue");
    }
})  



// Route to DELETE the article 
router.delete('/', verifying, (req, res)=>{
    allarticle.deleteOne({ title: req.body.title }, function(err) {
        if (!err) {
                res.status(200).send("user got deleted")
        }
        else {
            res.status(500).send("something wrong database")
        }
    });
})



// Middleware to verify the jwt
function verifying(req, res, next) {
    const TOKEN = req.headers.bearer;
    jwt.verify(TOKEN, process.env.SECRET, (err, decode)=>{
        if(err){
            res.status(400).send("Not valid!!!")
        }
        else{
            next();
        }
    });
}

