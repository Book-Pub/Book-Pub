export interface IAddressRequest {
  streetName: string;
  district: string;
  zipCode: string;
  number?: string;
  city: string;
  state: string;
}

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
  address: IAddressRequest;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
}

export interface IAddressUpdate {
  streetName?: string;
  district?: string;
  number?: string;
  zipCode?: string;
  city?: string;
  state?: string;
}
