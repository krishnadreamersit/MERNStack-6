var port = process.env.PORT || 3000;

var app = require('./app');

var server = app.listen(port, function() {
  console.log(`Listening http://127.0.0.1:${port}`);
});