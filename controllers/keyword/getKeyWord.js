const Keyword = require("../../models/keyword.model");

const getKeyWord = async (req, res) => {
    Keyword.find()
        .then(keywords => res.json(keywords))
        .then(err => res.status(400).json('Error', err))
}

module.exports = getKeyWord; 