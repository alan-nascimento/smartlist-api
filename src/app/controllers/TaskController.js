const mongoose = require('../../data');

const Task = mongoose.model('Task');

module.exports = {
  async index(req, res) {
    try {
      const { page = 1 } = req.query;
      const tasks = await Task.paginate({}, { page, limit: 10 });

      return res.json(tasks);
    } catch (err) {
      console.log(err);
    }
  },

  async show(req, res) {
    try {
      const task = await Task.findById(req.params.id);

      return res.json(task);
    } catch (err) {
      console.log(err);
    }
  },

  async store(req, res) {
    try {
      const task = await Task.create(req.body);

      return res.json(task);
    } catch (err) {
      console.log(err);
    }
  },

  async update(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      return res.json(task);
    } catch (err) {
      console.log(err);
    }
  },

  async destroy(req, res) {
    try {
      await Task.findByIdAndRemove(req.params.id);

      return res.send('Task removed with success!');
    } catch (err) {
      console.log(err);
    }
  },
};
