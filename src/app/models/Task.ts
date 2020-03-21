import { Schema, model } from 'mongoose';

const Task = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export default model('Task', Task);
