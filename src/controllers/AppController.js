const express = require('express');
const authMiddleware = require('../middlewares/auth');
const routes = express.Router();

routes.use(authMiddleware);

module.exports = {
  
  async ok(req, res) {
    try {

      return res.send({ ok: true, user: req.userId });
      
    } catch(err) {
      
      return res.send({ error: err})
    }
  },

}
