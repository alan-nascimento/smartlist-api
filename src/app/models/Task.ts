import mongoosePaginate from 'mongoose-paginate';

import { Schema, model } from 'mongoose';

const Task = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

Task.plugin(mongoosePaginate);

export default model('Task', Task);
