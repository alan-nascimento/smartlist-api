const mongoose = require('mongoose');

const Task = mongoose.model('Task');

module.exports = {
    async index(req, res) {
        const tasks = await Task.find();

        return res.json(tasks);
    }
}
