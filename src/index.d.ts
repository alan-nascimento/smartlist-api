declare namespace Express {
  export interface Request {
    user_id: string;
    params: {
      id: string;
    }
  }
}
