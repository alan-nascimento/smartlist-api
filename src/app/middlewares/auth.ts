import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { NextFunction } from 'express';

import authConfig from '@config/auth';

export default async (req: any, res: any, next: NextFunction): Promise<any> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded: any = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid.' });
  }
};
