var mongoose = require('mongoose');
var schema = mongoose.Schema;

var bookSchema = new schema( {
    title: String,
    author: String }, {collection: 'books' });

exports.bookSchema = bookSchema;
