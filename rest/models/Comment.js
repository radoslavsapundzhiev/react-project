const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const commentSchema = new Schema({
    title: {
        type: mongoose.SchemaTypes.String,
        required: true,
        maxlength: [33, 'The title length must not exceed 33 characters!']
    },
    description: {
        type: mongoose.SchemaTypes.String,
        required: true,
        minlength: [30, 'The description should be minimum 30 characters long!'],
        maxlength: [450, 'The description should be 450 characters maximum!']
    },
    date: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: Date.now
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    car: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Car'
    },
});

module.exports = new Model('Comment', commentSchema);