interface ICategoriesRequest {
  name: string;
}

interface ICategoryIDRequest {
  id: string;
}

interface ICategoryUpdate {
  id: string;
  name: string;
}

export { ICategoriesRequest, ICategoryIDRequest, ICategoryUpdate };
