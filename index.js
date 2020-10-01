const express = require('express');
const expressHbs = require('express-handlebars');

var app = express();
app.listen(2020);
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
// app.get('/solutions',function(req,res){
//     res.render('solutions')
// })
app.get('/qt-community',function(req,res){
    res.render('qt-community')
})


