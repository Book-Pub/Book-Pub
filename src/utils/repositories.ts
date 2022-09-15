import AppDataSource from "../data-source";
import { Address } from "../entities/address/address.entity";
import { Author } from "../entities/author/author.entity";
import { Categories } from "../entities/category/category.entity";
import { Ebooks } from "../entities/ebooks/ebooks.entity";
import { Favorites } from "../entities/favorites/favorites.entity";
import { Payment } from "../entities/payment/payment.entity";
// import { PaymentCart } from "../entities/paymentCart/paymentCart.entity";
import { User } from "../entities/users/user.entity";
import { Order } from "../entities/order/order.entity";
import { OrderEbooks } from "../entities/orderBooks/orderEbooks.entity";

const userRepository = AppDataSource.getRepository(User);
// const paymentCartRepository = AppDataSource.getRepository(PaymentCart);
const paymentRepository = AppDataSource.getRepository(Payment);
const favoritesRepository = AppDataSource.getRepository(Favorites);
const ebooksRepository = AppDataSource.getRepository(Ebooks);
const categoriesRepository = AppDataSource.getRepository(Categories);
const orderRepository = AppDataSource.getRepository(Order);
const authorRepository = AppDataSource.getRepository(Author);
const addressRepository = AppDataSource.getRepository(Address);
const orderEbooksRepository = AppDataSource.getRepository(OrderEbooks)

export {
  userRepository,
  // paymentCartRepository,
  paymentRepository,
  favoritesRepository,
  ebooksRepository,
  categoriesRepository,
  orderRepository,
  authorRepository,
  addressRepository,
  orderEbooksRepository
};
