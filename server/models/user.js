const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    dob:{
        type: Date,
        required: true,
        trim : true
    },
    gender:{
        type: String,
        required: true,
        enum : ['MALE','FEMALE','UNDISCLOSED'],
        default: 'UNDISCLOSED'
    },

});


module.exports = mongoose.model('User', userSchema)