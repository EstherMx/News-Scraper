var mongoose = require('mongoose');
//Create the Schema Class
var Schema = mongoose.Schema;

//Create the comment Schema

var CommentSchema = new Schema({

  comment:{
    type: String
  }
});
//Create the comment model with the commentSchema
var Comment = mongoose.model('Comment', CommentSchema);

//vars export this model
module.exports = Comment;