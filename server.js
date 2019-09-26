const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+ '/public/dist/public'));

require('./server/config/mongoose.js')(app)
require('./server/models/movie.js')(app)
require('./server/config/routes.js')(app)

app.listen(8000, function() {
    console.log("listening on port 8000");
})