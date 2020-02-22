const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.send('hello'));

require('./src/data');
require('./src/models/User');
require('./src/models/Task');

//const Task = mongoose.model('Task');

app.use('/api', require('./src/routes.js'));

app.listen(PORT, HOST);
