const Movie = require('../../models/movie.model');

const getMostVoteMovie = async (req,res) => {
    await Movie.find()
        .sort({vote_count: -1})
        .limit(10)
        .then(movies => res.json(movies))
        .catch(err => res.status(400).json('Error', err))
}

module.exports = getMostVoteMovie;