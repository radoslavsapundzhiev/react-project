const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/:id/all', controllers.comment.get.all);

router.post('/:id/create', auth(), controllers.comment.post.create);

module.exports = router;