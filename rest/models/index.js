const User = require('./User');
const Origami = require('./Origami');
const TokenBlacklist = require('./TokenBlacklist');
const Car = require('./Car');
const Comment = require('./Comment');

// User
//     .create({ username: 'Rado', password: '123456'})
//     .then((user) => {
//         Car.create({
//             title: "Audi a3 много запазено",
//             description: "Very good car!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//             model: "Audi",
//             imageUrl: "https://i.imgur.com/drIOsYl.jpg",
//             brand: "Audi",
//             fuel: "Gasoline",
//             year: 1988,
//             price: 2500,
//             author: user._id
//         })
//         .then((car) => {
//             Promise.all([
//                 User.updateOne({ _id: user._id }, { $push: { posts: car } }),

//                 Comment.create({ title: "nice title1", description: "1super coolrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", author: user._id, car: car._id })
//                 .then((comment) => 
//                     Promise.all([
//                         User.updateOne({ _id: user._id }, { $push: { comments: comment } }),
//                         Car.updateOne({ _id: car._id }, { $push: { comments: comment }})
//                     ])),

//                 Comment.create({ title: "nice title1", description: "1super coolrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", author: user._id, car: car._id })
//                 .then((comment) => 
//                     Promise.all([
//                         User.updateOne({ _id: user._id }, { $push: { comments: comment } }),
//                         Car.updateOne({ _id: car._id }, { $push: { comments: comment }})
//                     ]))
//                 .catch(console.error)
//             ])
//         })
//         .catch(console.error);

//         Car.create({
//             title: "Audi a3 много запазено",
//             description: "Very good car!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//             model: "Audi",
//             imageUrl: "https://i.imgur.com/drIOsYl.jpg",
//             brand: "Audi",
//             fuel: "Gasoline",
//             year: 1988,
//             price: 2500,
//             author: user._id
//         }).catch(console.error);

//         Car.create({
//             title: "Audi a3 много запазено",
//             description: "Very good car!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//             model: "Audi",
//             imageUrl: "https://i.imgur.com/drIOsYl.jpg",
//             brand: "Audi",
//             fuel: "Gasoline",
//             year: 1988,
//             price: 2500,
//             author: user._id
//         }).catch(console.error);

//         Car.create({
//             title: "Audi a3 много запазено",
//             description: "Very good car!aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//             model: "Audi",
//             imageUrl: "https://i.imgur.com/drIOsYl.jpg",
//             brand: "Audi",
//             fuel: "Gasoline",
//             year: 1988,
//             price: 2500,
//             author: user._id
//         }).catch(console.error);
//     }).catch(console.error);

module.exports = {
    User,
    Origami,
    Car,
    Comment,
    TokenBlacklist
};