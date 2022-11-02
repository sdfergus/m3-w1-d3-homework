var express = require('express');
var path = require('path');
var app = express();
var PORT = 3000;

app.get('/components', (req, res) => {
    res.render('content');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(PORT, ()=> {
    console.log(`App is running on port ${PORT}`);
});