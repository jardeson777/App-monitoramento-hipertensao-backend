declare namespace Express {
  export interface Request {
    user: {
      userId: string;
      email: string;
      role: string;
    };
  }
  export interface Response {
    user: {
      userId: string;
      email: string;
      role: string;
    };
  }
}
