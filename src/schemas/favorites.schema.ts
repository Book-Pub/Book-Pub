import * as yup from "yup";

import { SchemaOf } from "yup";
import { IFavoritesRequest } from "../interfaces/favorites.interface";

export const favoritesRequestSchema: SchemaOf<IFavoritesRequest> = yup
  .object()
  .shape({
    user: yup.string().required(),
    books: yup.string().required(),
    products: yup.string().required(),
  });
