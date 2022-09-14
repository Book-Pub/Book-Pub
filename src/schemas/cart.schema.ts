import * as yup from "yup";

import { SchemaOf } from "yup";
import { IOrderRequest } from "../interfaces/order.interface";

export const orderRequestSchema: SchemaOf<IOrderRequest> = yup.object().shape({
  ebooksId: yup.string().required(),

});
