import * as yup from "yup";

import { SchemaOf } from "yup";

import { IProductsRequest } from "../interfaces/products.interface";

export const productsRequestSchema: SchemaOf<IProductsRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    value: yup.number().required(),
    category: yup.string().required(),
    favorite: yup.string().required(),
  });
