import * as yup from "yup";

import { SchemaOf } from "yup";
import { ICartRequest } from "../interfaces/cart.interface";

export const cartRequestSchema: SchemaOf<ICartRequest> = yup.object().shape({
  name: yup.string().required(),
  totalValue: yup.number().required(),
});
