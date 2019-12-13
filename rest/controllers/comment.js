const models = require('../models');

module.exports = {
  get: {
      all: (req, res, next) => {
        const limit = +req.query.limit;
        if (limit) {
          models.Comment.findById({ car: req.params.id }).populate('author').populate('car').sort({ date: -1 }).limit(limit)
            .then((comments) => res.send(comments))
            .catch(next);
          return;
        }
        models.Comment.find({ car: req.params.id }).populate('author').populate('car').sort({ date: -1 })
          .then((comments) => res.send(comments))
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
      }

  },

  post: {
      create: (req, res, next) => {
        const { title, description, date } = req.body;
        const { _id } = req.user;
        const carId = req.params.id;

        models.Comment.create({ title, description, car: carId, author: _id })
          .then((createdComment) => {
            return Promise.all([
              models.User.updateOne({ _id: req.user }, { $push: { comments: createdComment } }),
              models.Car.updateOne({ _id: carId }, { $push: { comments: createdComment } }),
              models.Comment.findOne({ _id: createdComment._id })
            ]);
          })
          .then(([modifiedUser, modifiedCar, commentObj]) => {
            res.send(commentObj);
          })
          .catch((err) => {
            const errorMessages = Object.entries(err.errors).map(tuple => {
              return tuple[1].message;
            });
            res.send(errorMessages);
          });
      },
  }

//   put: (req, res, next) => {
//     const id = req.params.id;
//     const { description } = req.body;
//     models.Origami.updateOne({ _id: id }, { description })
//       .then((updatedOrigami) => res.send(updatedOrigami))
//       .catch(next)
//   },

//   delete: (req, res, next) => {
//     const id = req.params.id;
//     models.Origami.deleteOne({ _id: id })
//       .then((removedOrigami) => res.send(removedOrigami))
//       .catch(next)
//   }
};