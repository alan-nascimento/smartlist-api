import { Request, Response } from 'express';

import User from '@models/User';

class UserController {
  public store = async (req: Request, res: Response): Promise<Response> => {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { _id, email, password } = await User.create(req.body);

    return res.json({
      id: _id,
      email,
      password,
    });
  }

  // public update = async (req: Request, res: Response): Promise<Response> => {
  //   try {
  //     const { id: _id } = req.params;
  //     const user = await User.findOneAndUpdate(_id, req.body);

  //     return res.status(200).json(user);
  //   } catch (err) {
  //     return res.status(400).json({ error: 'Cannot update user' });
  //   }
  // }
}

export default new UserController();
