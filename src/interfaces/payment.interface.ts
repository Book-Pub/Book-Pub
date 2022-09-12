export interface IPaymentRequest {
  cardName: string;
  numberCard: string
  securityCode: string;
  expireDate: string;
}

export interface IPaymentUpdate{
  cardName: string;
  numberCard: string
  expireDate: string;
}
