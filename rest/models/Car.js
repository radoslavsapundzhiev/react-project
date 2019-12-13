const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const carSchema = new Schema({
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
    brand: {
        type: mongoose.SchemaTypes.String,
        required: true,
        maxlength: [11, 'The brand should be 11 characters maximum!']
    },
    model: {
        type: mongoose.SchemaTypes.String,
        required: true,
        maxlength: [11, 'The model should be 11 characters maximum!']
    },
    year: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        validate: {
            validator: function(v){
                return v.toString().length === 4;
            },
            message:  'The year must be only 4 chars long!'
        }
    },
    imageUrl: {
        type: mongoose.SchemaTypes.String,
        required: true,
        validate: {
            validator: function(v){
                return v.startsWith('http');
            },
            message:  'Link url should always start with http!'
        } 
    },
    fuel: {
        type: mongoose.SchemaTypes.String,
        required: true,
        maxlength: [11, 'The fuel should be 11 characters maximum!']
    },
    price: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        max: [1000000, 'The maximum price is 1000000$!'],
        min: [1000, 'The minimum price is 1000000$!']
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    comments: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Comment' }]
});

module.exports = new Model('Car', carSchema);