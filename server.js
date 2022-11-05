var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); 

app.use(express.static(__dirname + "/static"));
app.use("/recursos", express.static(__dirname + "/public"));



app.get('/', function(request, response) {
    response.send("<h1>Hello Express</h1>");
})
app.get('/autos', function(request, response) {
    response.render('autos');
})
app.get('/gatos', function(request, response) {
    response.render('gatos');
})
app.get('/autos/nuevo', function(request, response) {
    response.render('formulario');
})
app.listen(8000, function() {
    console.log("listening on port 8000");
}) 