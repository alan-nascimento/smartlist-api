const mongoose = require('../data');
const express = require('express');

const User = require('../models/User');

const Auth = mongoose.model('User');

const router = express.Router();

module.exports = {

  async store(req, res) {
    try {
      const auth = await Auth.create(req.body);
      
      return res.json(auth);
    } catch(err) {
      return res.status(400).send({ error: 'Registration failed' });
    }
  },

}

// router.post('/api/register', async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     return res.send({ user });
//   } catch (err) {
//     return res.status(400).send({ error: 'Registration failed' });
//   }
// });

// module.exports = app => app.use('/auth', router);
