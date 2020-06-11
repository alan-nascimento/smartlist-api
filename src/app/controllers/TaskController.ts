import { Request, Response } from 'express';

import Task from '@models/Task';

class TaskController {
  public index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { user_id } = req.query;

      const tasks = await Task.find({ user_id });

      return res.json(tasks);
    } catch (err) {
      return res.status(400).json({ error: 'Index tasks error' });
    }
  }

  public store = async (req: Request, res: Response): Promise<Response> => {
    try {
      const task = await Task.create(req.body);

      return res.status(200).json(task);
    } catch (err) {
      return res.status(400).json({ error: 'Store task error', err });
    }
  }

  public destroy = async (req: Request, res: Response): Promise<Response> => {
    try {
      await Task.findByIdAndRemove(req.params.id);

      return res.json({ message: 'Task removed with success!' });
    } catch (err) {
      return res.status(400).json({ error: 'Destroy task error' });
    }
  }
}

export default new TaskController();
