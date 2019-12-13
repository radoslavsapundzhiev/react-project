const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/:id/all', controllers.comment.get.all);

router.post('/:id/create', auth(), controllers.comment.post.create);


// router.get('/detail/:id', controllers.car.get.detail);
// router.get('/myCars', auth(), controllers.car.get.myCars);

// router.post('/create', auth(), controllers.car.post.create);


// router.put('/:id', auth(), controllers.car.put);

// router.delete('/:id', auth(), controllers.car.delete);

module.exports = router;