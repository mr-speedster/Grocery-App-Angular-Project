export interface ICategory {
    catImage: string;
    catDescription: string;
    position: number;
    status: boolean;
    _id: string;
    catId: number;
    catName: string;
    slug: string;
}

export interface ICategoryResponse {
    error: boolean;
    count: number;
    data: ICategory[];
}