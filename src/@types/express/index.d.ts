import * as express from "express";
import { IUserRequest } from "../../interfaces/users.interface";

declare global {
  namespace Express {
    interface Request {
      user: {
        isAdm: boolean;
        id: string;
      };
      newUser: IUserRequest;
    }
  }
}
