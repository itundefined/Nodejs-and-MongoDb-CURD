// Model schema to mongoose

const mongoose =  require("mongoose");

// Creating the mongoose schema

const articleSchema = new mongoose.Schema({
    title:{type:String, unique : true},
    richtext: JSON,
});

module.exports = mongoose.model("allarticles", articleSchema);








