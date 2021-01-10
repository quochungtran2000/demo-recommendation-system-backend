const router = require('express').Router();
const { getKeyWord } = require('../controllers/keyword/index');

router.route('/').get(getKeyWord)

module.exports = router;