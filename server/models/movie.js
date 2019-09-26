const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

module.exports = function(app){
    var ReviewSchema = new mongoose.Schema({
        name: { type: String, required: [true,"You must provide your name"], minlength: [3, "Please enter a name with at least 3 characters"]},
        stars: { type: Number, min: [1, "rating must be at least 1 star"], max: [5,"rating can be at most 5 stars"], required: [true, "You must provide a rating"], },
        review_message: { type: String, required: [true,"You must provide a review"], minlength: [3,"Review must be at least 3 characcters"]}
    })

    var MovieSchema = new mongoose.Schema({
        title: {type: String, required: [true, "Movies must have a title"], minlength: [3, "Please enter a title with at least 3 characters"],unique: true},
        reviews : [ReviewSchema] 
    })
    
    MovieSchema.plugin(unique, {message: "That movie is already in the database!"});
    mongoose.model('Review',ReviewSchema)
    mongoose.model('Movie',MovieSchema)
}