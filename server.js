var express = require('express'),
    app     = express();

app.use(express.static('public'));

app.use('/', function(req, res, next) {
  next();
});

app.get('/', function(req, res) {
  console.log('INDEX/');
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, function(err) {
  console.log('Started');
});
