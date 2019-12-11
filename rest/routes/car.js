const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.car.get);

router.post('/', auth(), controllers.car.post);

// router.put('/:id', auth(), controllers.car.put);

// router.delete('/:id', auth(), controllers.car.delete);

module.exports = router;