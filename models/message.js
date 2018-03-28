var mongoose = require('mongoose');

var msgSchema = new mongoose.Schema({
    content: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Message', msgSchema);