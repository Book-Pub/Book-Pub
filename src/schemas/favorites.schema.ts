import * as yup from "yup";

import { SchemaOf } from "yup";
import { IFavoritesRequest } from "../interfaces/favorites.interface";

export const favoritesRequestSchema: SchemaOf<IFavoritesRequest> = yup
  .object()
  .shape({
    bookId: yup.string().required(),
    userId: yup.string().required(),
  });
