var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://apple:pie@ds041581.mongolab.com:41581/book-shelf');
var book_Schema = require('./book_schema').bookSchema;

mongoose.model('bookM',book_Schema);
var bookAction;

/*
 * Make Ther Binding between Model & Mongoose Connection
 */
mongoose.connection.once('open', function() {
  var Books = this.model('bookM');

  var query = Books.find();
  //query.where('action').ne('PRIVATE');  //
  query.exec(function(err, docs) {
    bookAction = docs;
    console.log("docs:\n-----\n " + bookAction);
    mongoose.disconnect();
    return bookAction;
  });
});

exports.getData = function() {
  return bookAction;
};
