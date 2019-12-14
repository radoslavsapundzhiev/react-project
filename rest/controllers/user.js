const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
  get: {
    all: (req, res, next) => {
    models.User.find()
      .then((users) => res.send(users))
      .catch(next)
    },
    detail: (req, res, next) => {
      res.send(req.user);
    }
},

  post: {
    register: (req, res, next) => {
      const { username, password } = req.body;
      models.User.create({ username, password })
        .then((createdUser) => res.send(createdUser))
        .catch((err) => {
            if(err.name === 'MongoError'){
              res.send('User already exists!');
            }else if(err.name === 'ValidationError'){
              const errorMessages = Object.entries(err.errors).map(tuple => {
                  return tuple[1].message;
              });
              res.send(errorMessages);
            }
        });
    },

    login: (req, res, next) => {
      const { username, password } = req.body;
      models.User.findOne({ username })
        .then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
        .then(([user, match]) => {
          if (!match) {
            res.status(401).send('Invalid username or password');
            return;
          }

          const token = utils.jwt.createToken({ id: user._id });
          res.cookie(config.authCookieName, token).cookie('username', username).send(user);
        })
        .catch(next);
    },

    logout: (req, res, next) => {
      const token = req.cookies[config.authCookieName];
      console.log('-'.repeat(100));
      console.log(token);
      console.log('-'.repeat(100));
      models.TokenBlacklist.create({ token })
        .then(() => {
          res.clearCookie(config.authCookieName).clearCookie('username').send('Logout successfully!');
        })
        .catch(next);
    }
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { username, password } = req.body;
    models.User.update({ _id: id }, { username, password })
      .then((updatedUser) => res.send(updatedUser))
      .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.User.deleteOne({ _id: id })
      .then((removedUser) => res.send(removedUser))
      .catch(next)
  }
};