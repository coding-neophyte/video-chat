const express = require('express');
const path = require('path');

const app = express();

// Built in middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// App routes
app.get('/', (req, res) => {
  res.send('hello world');
});

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use('/api/v1/chat', require('../lib/controllers/videoController'));
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
