const mongoose = require('mongoose');
const moment = require('moment');

const commentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    agentName: {type: String, require: true},
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    contact: {type: Number, require: true},
    comment: {type: String, require: true},
    date:{type: String ,default: moment().format('MMMM Do YYYY') },
    emotion: {type: String, require : true},
    rating: {type: Number, require: true},

});

module.exports = mongoose.model('Comment', commentSchema);