var express = require('express');
var app = express();
var bookAction = require('./bookDataCtrl');

app.get('/ws_book-shelf/getAllReaders', function (req,res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  app.set('json spaces', 4);
  res.set("Content-Type", "application/json");
  res.status(200);
  res.json(bookAction.getData());
});

app.listen(process.env.PORT || 3000);

console.log('\nservice is listeninn On Port 3000 ..');
