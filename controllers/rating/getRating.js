const Rating = require("../../models/rating.model")

const getRating = async (req, res) => {
    Rating.find()
        .then(rating => res.json(rating))
        .catch(err => res.status(400).json('Error', err))
}

module.exports = getRating