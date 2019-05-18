const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/smartlist', { useNewUrlParser: true });

require('./src/models/Task');

const Task = mongoose.model('Task');

app.get('/', (req, res) => {
    res.send('OK');
});

app.listen(3000);
