require('./set')
__path = process.cwd()


// Module
var express = require('express'); 
var app = express();
var createError = require('http-errors');
var favicon = require('serve-favicon');
var path = require('path');
var cookieParser = require('cookie-parser');

//
cors = require('cors'),
secure = require('ssl-express-www');

// Port
var PORT = process.env.PORT || 3000 || 5000 || 3000

// Image title
app.use(favicon(path.join(__dirname,'assets','img','favicon','1.png')))

// Routes
var main = require('./routes/main'),
    api = require('./routes/api')
    game = require('./routes/game')

// App use
app.set('trust proxy', true);
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(cookieParser());
app.use(express.static("assets"))
app.use('/', main)
app.use('/api', api)
app.use('/game', game)

// App use error 404
app.use(function (req, res, next) {
	next(createError(404))
	})
	
app.use(function (err, req, res, next) {
	res.sendFile(__path + '/views/404.html')
	})
  
// App listen (port)
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:` + PORT)
	console.log(`REST API BY ${author}`)
	})

// 
module.exports = app
