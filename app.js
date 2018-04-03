var express = require('express')

var app = express()

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');  
app.set('views', __dirname + '/public/views');

var routes = require('./routes/routes.js')(app)

var port = process.env.PORT || 8888
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
})