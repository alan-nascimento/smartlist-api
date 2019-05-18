const express = require('express');
const mongoose = require('mongoose');
require('./src/models/Task');

const app = express();

mongoose.connect('mongodb://localhost:27017/api', { useNewUrlParser: true });

const Task = mongoose.model('Task');

app.use('/api', require('./src/routes.js'));

app.listen(3000);
