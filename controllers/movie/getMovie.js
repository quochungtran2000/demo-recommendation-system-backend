const DataMovie = require('../../models/DataMovie.model');

const getMovie = async (req,res) => {
    // const { page = 1 , pageSize = 20 } = req.query;
    const page =1, pageSize = 20;
    console.log(req.query);
    await DataMovie.find()
        .sort({vote_average: -1})
        .skip((page-1)*pageSize)
        .limit(pageSize)
        .then(movies => res.json(movies))
        .catch(err => res.status(400).json('Error', err))
}

module.exports = getMovie;