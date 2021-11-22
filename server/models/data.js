const mongoose = require('mongoose');
const schema = mongoose.Schema;

const numOfLikes = schema({
    likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('likes', numOfLikes);