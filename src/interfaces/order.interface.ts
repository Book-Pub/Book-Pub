export interface IOrderRequest{
    ebooksId: string,
    userId: string
}

export interface IOrderUpdate{
    status:string,
    id:string
}

export interface IOrderDelete{
    id:string
}
