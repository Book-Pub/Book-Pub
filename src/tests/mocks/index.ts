import { IUserLogin } from "../../interfaces/login.interface";
import { IAddressUpdate, IUserRequest, IUserUpdate } from "../../interfaces/users.interface";

export const mockedUser : IUserRequest = {
    name: "Kenzie",
    email: "kenzie@mail.com",
    password: "kenzinho1234",
    isAdm: true,
    address:{
		streetName: "Rua2",	
		district: "sl",
		zipCode: "88090205",
		number: "123",
		city: "Floripa",
		state: "SC"
    }
}

export const mockedUserNoAdm : IUserRequest = {
    name: "Churros",
    email: "churros@mail.com",
    password: "churros1234",
    isAdm: false,
    address:{
		streetName: "Rua2",	
		district: "sl",
		zipCode: "88090205",
		number: "123",
		city: "Floripa",
		state: "SC"
    }
}

export const mockedUserLoginAdm : IUserLogin = {
    email: "kenzie@mail.com",
    password: "kenzinho1234"
}

export const mockedUserLoginNotAdm : IUserLogin = {
  email: "churros@mail.com",
  password: "churros1234"
}


export const mockedUserUpdate : IUserUpdate = {
  name: "Jorge",
  email:"jorge@kenzie.com",
  password: "123456",

}

export const mockedUserNotExists : IUserUpdate = {
  name: "Flavinho do Pneu",
  email:"flavin@kenzie.com",
  password: "1234",

}

export const mockedUserUpdateAddress : IAddressUpdate = {
  streetName: "Rua Los Angeles",	
  district: "Cl",
  zipCode: "88090205",
  number: "123",
  city: "California",
  state: "US"
}