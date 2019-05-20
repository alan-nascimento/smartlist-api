const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

TaskSchema.plugin(mongoosePaginate);

mongoose.model('Task', TaskSchema);
