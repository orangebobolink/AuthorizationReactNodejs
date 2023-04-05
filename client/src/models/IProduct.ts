export interface IProduct {
    _id: string,
    name: string,
    price: { $numberDecimal: number },
    description: string
}