const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/api', 
    { useNewUrlParser: true }
);

require('./src/models/Task');

const Task = mongoose.model('Task');

app.use('/api', require('./src/routes.js'));

app.listen(3000);
