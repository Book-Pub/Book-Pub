import * as express from "express";

import { IUserLogin } from "../../interfaces/login.interface";
import { IPaymentRequest } from "../../interfaces/payment.interface";
import { IProductsRequest } from "../../interfaces/products.interface";
import { IUserRequest } from "../../interfaces/users.interface";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        isAdm: boolean;
        isActive: boolean;
      };
      login: IUserLogin;
      newUser: IUserRequest;
      products: IProductsRequest;
      payment: IPaymentRequest;
    }
  }
}
