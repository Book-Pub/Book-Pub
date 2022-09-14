import { IAuthorRequest } from "../../interfaces/author.interface";
import { ICategoriesRequest } from "../../interfaces/categories.interface";
import { IBookRequest } from "../../interfaces/ebooks.interface";
import { IFavoritesRequest } from "../../interfaces/favorites.interface";
import { IUserLogin } from "../../interfaces/login.interface";
import { IOrderRequest } from "../../interfaces/order.interface";
import { IPaymentRequest } from "../../interfaces/payment.interface";
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

export const mockedEbook : IBookRequest = {
    name: "Harry Potter",
    dateRelease: "23/09/2001",
    bookCover: "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
    value: 29.99,
    description: "Harry bla, faz mto bla",
    language: "PortuBla",
    editionNumber: "2v",
    numberPages: "700pages",
    country: "Brasil",
    isbn: "223werdfcdr345234",
    author: "",
		category: "",
		publishingCompany: "23d",
}

export const mockedAuthor : IAuthorRequest = {
  name: "J.K Rowling"
}

export const mockedCategory : ICategoriesRequest = {
    name: "Magic"
}

export const mockedOrder : IOrderRequest = {
    ebooksId: ""
}

export const mockedFavorites : IFavoritesRequest = {
    bookId: "",
    userId: ""
}

export const mockedPayment : IPaymentRequest = {
    cardName :"213",
    numberCard :"233",
    expireDate :"2323",
    securityCode :"123"
}