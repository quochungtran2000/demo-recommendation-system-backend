const router = require('express').Router();
const { getMovie, getMostVoteMovie } = require('../controllers/movie/index');

router.route('/').get(getMovie)
router.route('/mostVoteMovie').get(getMostVoteMovie);

module.exports = router;