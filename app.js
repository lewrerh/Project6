const express = require('express');

const data = require('./data.json');

const app = express();

const path = require('path');

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, '/images/')));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/images', express.static(path.join(__dirname, '/images/')));

app.get('/', function (request, response) {
    
    response.render('index', { projects: data.projects});    
});
app.get('/about', function (request, response) {
    
    response.render('about');    
});

app.get('/index', function (request, response) {
    
    response.render('index', { projects: data.projects });
});

app.get('/project', function (request, response) {

    let projectIndex = request.query.id;

    response.render('project', { project: data.projects[projectIndex] });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});

