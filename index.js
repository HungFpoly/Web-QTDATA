const express = require('express');
const expressHbs = require('express-handlebars');

var app = express();
app.listen(2209);
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('images'));

app.engine('.hbs', expressHbs());
app.set('view engine', '.hbs');

// app.get('/home',function(req,res){
//     res.render('home')
// })
// app.get('/company',function(req,res){
//     res.render('company')
// })
app.get('/solutions',function(req,res){
    res.render('Solution')
});
app.get('/qt-community',function(req,res){
    res.render('qt-community')
});
app.get ('/Account', function (req, res) {
  res.render ('Account');
});



