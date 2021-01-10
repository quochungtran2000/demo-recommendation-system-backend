const { Timestamp } = require('mongodb');
const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    adult: String,
    belongs_to_collection: Object,
    budget: String,
    genres: Array,
    homepage: String,
    id:  String,
    imdb_id: String,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: String,
    poster_path: String,
    production_companies: Array,
    production_countries: Array,
    release_date: String,
    revenue: String,
    runtime: String,
    spoken_languages: Array,
    status: String,
    tagline: String,
    title: String,
    video: String,
    vote_average: String,
    vote_count:String


}, {
    timestamps: true
})

const Movie = model('movie', movieSchema, 'movies')

module.exports = Movie;
