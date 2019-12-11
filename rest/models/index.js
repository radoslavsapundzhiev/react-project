const User = require('./User');
const Origami = require('./Origami');
const TokenBlacklist = require('./TokenBlacklist');
const Car = require('./Car');

// User
//     .create({ username: 'Pesho', password: '123456'})
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
    TokenBlacklist
};