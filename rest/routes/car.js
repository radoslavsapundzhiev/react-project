const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/all', controllers.car.get.all);
router.get('/detail/:id', controllers.car.get.detail);
router.get('/myCars', auth(), controllers.car.get.myCars);

router.post('/create', auth(), controllers.car.post.create);


// router.put('/:id', auth(), controllers.car.put);

// router.delete('/:id', auth(), controllers.car.delete);

module.exports = router;