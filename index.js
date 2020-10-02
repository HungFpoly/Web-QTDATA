const express = require('express');
const expressHbs = require('express-handlebars');

var app = express();
app.listen(2203);
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('images'));

app.engine('.hbs', expressHbs());
app.set('view engine', '.hbs');

app.get('/home',function(req,res){
    res.render('qt-blog')
})
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
app.get ('/consumer-lending-mortgage', function (req, res) {
    res.render ('consumer-lending-mortgage');
});
app.get ('/qt-ai-qt-invest', function (req, res) {
    res.render ('qt-ai-qt-invest');
});
app.get ('/sale-ota', function (req, res) {
    res.render ('Sale-ota');
});
