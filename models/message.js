var mongoose = require('mongoose');

var User = require('./user');

var msgSchema = new mongoose.Schema({
    content: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

msgSchema.post('remove', function(message){
    User.findById(message.user, function(err, user) {
        user.messages.pull(message._id);
        user.save();
    });
});

module.exports = mongoose.model('Message', msgSchema);