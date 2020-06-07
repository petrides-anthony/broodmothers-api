const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  parentId: mongoose.ObjectId,
  title:  String, // String is shorthand for {type: String}
  content: String,
  details: {
    language: String,
    subject:  String
  }
});

module.exports = mongoose.model('Article', articleSchema);

// Continue with creating the model and reading up about it from:
// https://mongoosejs.com/docs/guide.html