const express = require('express');
const expressHbs = require('express-handlebars');

var app = express();
app.listen(2209);
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
//mấy cái chỗ get ni để chữ thường thôi
app.get ('/account', function (req, res) {
  res.render ('Account');
});
app.get ('/fogot-password', function (req, res) {
  res.render ('FogotPassword');
});




