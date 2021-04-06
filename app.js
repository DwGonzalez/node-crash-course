const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const Blog = require('./models/blogs');

// express app
const app = express();

// connect to mongodb
const dbURI = process.env.DB_CONN_STRING;
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    console.log('server started on port', process.env.PORT);
    console.log('db connected');
    app.listen(process.env.PORT | 3000);
}).catch((err) => {
    console.log(err)
});

// register ejs view engine
app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', {
                title: 'All Blogs',
                blogs: result
            });
        })
        .catch((err) => {
            console.log(err);
        });

});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});