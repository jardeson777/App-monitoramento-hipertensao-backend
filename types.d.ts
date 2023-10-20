declare namespace Express {
  export interface Request {
    user: {
      userId: string;
      email: string;
    };
  }
  export interface Response {
    user: {
      userId: string;
      email: string;
    };
  }
}
