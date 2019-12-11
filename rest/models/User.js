const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;

const userSchema = new Schema({
    username: {
        type: mongoose.SchemaTypes.String,
        validate: {
            validator: function(v){
                return /[A-Za-z]{3,}/.test(v);
            },
            message: props => 'Username should be at least 3 characters long and should consist only english letters!'
        },
        required: [true, 'Username is required!'],
        unique: [true, 'Username is already taken!'] 
    },

    password: {
        type: mongoose.SchemaTypes.String,
        validate: {
            validator: function(v){
                return /[A-Za-z0-9]{6,}/.test(v);
            },
            message: props => 'Password should be at least 6 characters long and should consist only english letters and digits!'
        },
        required: [true, 'Password is required!']
    },

    posts: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Car' }]

});

userSchema.methods = {

    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }

};

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = new Model('User', userSchema);