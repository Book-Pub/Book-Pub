export interface ICartRequest {
  productId: string;
  bookId: string;
  userId: string;
}

export interface ICartResponse {
  id: string;
  productId: string;
  bookId: string;
  userId: string;
  totalValue: number;
}
