const express = require('express');
const data = require('./data.json');
const app = express();
const path = require('path');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/images/')));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, '/images/')));
app.use('/static', express.static('public'));

app.get('/', function (request, response) {
    console.log(data);
response.render('index');
});
app.listen('3000', () => {
console.log('Server started on port 3000');
});