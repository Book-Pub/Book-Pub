import * as express from "express";

import { IUserLogin } from "../../interfaces/login.interface";
import { IPaymentRequest } from "../../interfaces/payment.interface";
import { IProductsRequest } from "../../interfaces/products.interface";
import { IUserRequest } from "../../interfaces/users.interface";
import { IFavoritesRequest } from "../../interfaces/favorites.interface";
import { IBookRequest } from "../../interfaces/ebooks.interface";
import { ICategoriesRequest } from "../../interfaces/categories.interface";
import { ICartRequest } from "../../interfaces/cart.interface";
import { IAuthorRequest } from "../../interfaces/author.interface copy";

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
      favorites: IFavoritesRequest;
      ebooks: IBookRequest;
      categories: ICategoriesRequest;
      cart: ICartRequest;
      author: IAuthorRequest;
    }
  }
}
