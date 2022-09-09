import * as yup from "yup";

import { SchemaOf } from "yup";
import { ICartRequest } from "../interfaces/cart.interface";

export const cartRequestSchema: SchemaOf<ICartRequest> = yup.object().shape({
  productId: yup.string().required(),
  bookId: yup.string().required(),
  userId: yup.string().required(),
});
