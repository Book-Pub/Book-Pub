export interface IAddressRequest {
  district: string;
  zipCode: string;
  number?: string;
  city: string;
  state: string;
}

export interface IPaymentRequest {
  card_name?: string;
  security_code?: number;
  expire_date?: string;
}

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  is_adm: boolean;
  is_active: boolean;
  address: IAddressRequest;
  payment: IPaymentRequest;
}
