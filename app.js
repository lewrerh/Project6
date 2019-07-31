const express = require('express');   // Create the express object

const data = require('./data.json');  // Get the JSON project data 

const app = express();                // Create the app object

const path = require('path');         // Create the path object

app.set('view engine', 'pug');        // Set the app view engine to pug

app.use(express.static(path.join(__dirname, 'public')));   // Set the static folder for the public folder

app.use(express.static(path.join(__dirname, '/images/')));  // Set the static folder for the images folder

app.use('/static', express.static(path.join(__dirname, 'public')));  // Set the static folder for the public folder

app.use('/images', express.static(path.join(__dirname, '/images/')));  // Set the static folder for the images folder

app.get('/', function (request, response) {                // Set an app route for localhost
    
    response.render('index', { projects: data.projects});   // Set an app route for the index 
});
app.get('/about', function (request, response) {           // Set an app route for the about
    
    response.render('about');    
});

app.get('/index', function (request, response) {          // Set an app route for the index
    
    response.render('index', { projects: data.projects });
});

app.get('/project', function (request, response) {        // Set an app route for the project

    let projectIndex = request.query.id;

    response.render('project', { project: data.projects[projectIndex] });
});

app.use(function (request, response, next) {              // Set an error handling middleware for the project   

    const err = new Error('Server error: Your requested page does not exist');
    err.status = 404;
    next(err);
});

app.use(function (err, request, response, next) {         // Handle errors

    response.locals.error = err;
    response.render('error', { error: err });
    console.log("Server error: Your requested page does not exist");

});

app.listen('3000', () => {                              // Start server listening on port 3000
    console.log('Server started on port 3000');
});

