const { Schema, model } = require('mongoose');

const dataMovieSchema = new Schema({
    index: Number,
    budget: Number,
    genres: String,
    homepage: String,
    id: Number,
    keywords: String,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Number,
    production_companies: Array,
    production_countries: Array,
    release_date: String,
    revenue: Number,
    runtime: Number,
    spoken_languages: Array,
    status: String,
    tagline: String,
    title: String,
    vote_average: Number,
    vote_count: Number,
    cast: String,
    crew: Array,
    director: String
},{
    timestamps: true
})

const DataMoive = model('dataMovie', dataMovieSchema,'data-movies')

module.exports = DataMoive;