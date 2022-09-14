export interface IOrderRequest{
    ebooksId: string,

}

export interface IOrderUpdate{
    status:string,
    id:string
}

export interface IOrderDelete{
    id:string
}
