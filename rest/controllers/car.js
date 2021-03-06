const models = require('../models');

module.exports = {
  get: {
      all: (req, res, next) => {
        const limit = +req.query.limit;
        if (limit) {
          models.Car.find().populate('author').sort({ _id: -1 }).limit(limit)
            .then((cars) => res.send(cars))
            .catch(next);
          return;
        }
        models.Car.find().populate('author')
          .then((cars) => res.send(cars))
          .catch(next);
      },

      detail: (req, res, next) => {
        const { id } = req.params;

        models.Car
          .findById(id)
          .populate('author')
          .then((car) => res.send(car))
          .catch(next);
      },

      myCars: (req, res, next) => {
        models.Car
          .find({ author: req.user._id })
          .populate('author')
          .then((cars) => res.send(cars))
          .catch(next);
      },

  },

  post: {
      create: (req, res, next) => {
        const { title, description, brand, model, year, imageUrl, fuel, price} = req.body;
        const { _id } = req.user;

        models.Car.create({ title, description, brand, model, year, imageUrl, fuel, price, author: _id })
          .then((createdCar) => {
            return Promise.all([
              models.User.updateOne({ _id: req.user._id }, { $push: { posts: createdCar } }),
              models.Car.findOne({ _id: createdCar._id })
            ]);
          })
          .then(([modifiedObj, carObj]) => {
            res.send(carObj);
          })
          .catch((err) => {
            const errorMessages = Object.entries(err.errors).map(tuple => {
              return tuple[1].message;
            });
            res.send(errorMessages);
          });
      },

      edit: (req, res, next) => {
        const id = req.params.id;
        const { title, description, brand, model, year, imageUrl, fuel, price} = req.body;
        models.Car.updateOne({ _id: id }, { title, description, brand, model, year, imageUrl, fuel, price})
          .then((updatedCar) => res.send(updatedCar))
          .catch(next);
      },

      delete: (req, res, next) => {
        const id = req.params.id;
        // models.Car.deleteOne({ _id: id })
        //   .then((removedCar) => res.send(removedCar))
        //   .catch(next)
        models.Car.findByIdAndRemove(id)
          .then((removedCar) => {
            req.user.posts = req.user.posts.filter(car => car.toString() !== removedCar._id.toString());
            return models.User.findByIdAndUpdate({ _id: req.user._id }, req.user);
          }).then(user => res.send(user))
          .catch(next);
      }
  }
};