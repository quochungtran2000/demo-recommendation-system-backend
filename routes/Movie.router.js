const router = require('express').Router();
const { getMovie, getMostVoteMovie, postRecommenderMovie} = require('../controllers/movie/index');

router.route('/').get(getMovie)
router.route('/bestMovie').get(getMostVoteMovie);
router.route('/recommenderMovie').post(postRecommenderMovie);

module.exports = router;