export interface IProduct {
    quantity: number;
    description: string;
    status: boolean;
    position: number;
    _id: string;
    catId: number;
    subId: number;
    productName: string;
    image: string;
    unit: string;
    price: number;
    mrp: number;
}

export interface ProductResponse {
    error: boolean;
    count: number;
    data: IProduct[];
}

export interface productDetailsResponse{
    error: boolean;
    data:  IProduct;
}
