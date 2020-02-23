import bcrypt from 'bcryptjs';

import { Document, Schema, model } from 'mongoose';

type User = Document & {
  name: string;
  email: string;
  password: string;
};

const User = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

User.pre<User>('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

export default model<User>('User', User);
