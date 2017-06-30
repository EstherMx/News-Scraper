var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//The ArticleSchema has index unique and dropDups for both title and link to avoid
//duplicate entries in the DB.
var ArticleSchema = new Schema({
  title: {
    type:String,
    required:true,
    index : {
      unique : true,
      dropDups : true
    }
  },
  
  link: {
    type:String,
    required:true,
    index : {
      unique : true,
      dropDups : true
    }
  },
  comment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
  }
});
var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;