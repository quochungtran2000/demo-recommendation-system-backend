const { Schema, model } = require('mongoose');

const ratingSchema = new Schema({
    userId: String,
    movieId: String,
    rating: String,
    timestamp: String
})

const Rating = model('ratings', ratingSchema, 'ratings');

module.exports = Rating
