import AppDataSource from "../data-source";
import { Address } from "../entities/address/address.entity";
import { Author } from "../entities/author/author.entity";
import { Cart } from "../entities/cart/cart.entity";
import { Categories } from "../entities/category/category.entity";
import { Ebooks } from "../entities/ebooks/ebooks.entity";
import { Favorites } from "../entities/favorites/favorites.entity";
import { Payment } from "../entities/payment/payment.entity";
import { PaymentCart } from "../entities/paymentCart/paymentCart.entity";
import { Products } from "../entities/products/products.entity";
import { User } from "../entities/users/user.entity";

const userRepository = AppDataSource.getRepository(User);
const productsRepository = AppDataSource.getRepository(Products);
const paymentCartRepository = AppDataSource.getRepository(PaymentCart);
const paymentRepository = AppDataSource.getRepository(Payment);
const favoritesRepository = AppDataSource.getRepository(Favorites);
const ebooksRepository = AppDataSource.getRepository(Ebooks);
const categoriesRepository = AppDataSource.getRepository(Categories);
const cartRepository = AppDataSource.getRepository(Cart);
const authorRepository = AppDataSource.getRepository(Author);
const addressRepository = AppDataSource.getRepository(Address);

export {
  userRepository,
  productsRepository,
  paymentCartRepository,
  paymentRepository,
  favoritesRepository,
  ebooksRepository,
  categoriesRepository,
  cartRepository,
  authorRepository,
  addressRepository,
};
