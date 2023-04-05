import {AxiosResponse} from 'axios/index';
import $api from '../http';
import {IProduct} from '../models/IProduct';

export class ProductService {
    static fetchProducts(): Promise<AxiosResponse<IProduct[]>> {
        return $api.get<IProduct[]>('/product');
    }

    static fetchProductById(id: number): Promise<AxiosResponse<IProduct>> {
        return $api.get<IProduct>(`/product/${id}`);
    }

    static createProduct(product: IProduct): Promise<AxiosResponse<IProduct>> {
        return $api.post<IProduct>(`/product`, {product});
    }

    static updateProduct(product: IProduct): Promise<AxiosResponse<IProduct>> {
        return $api.put<IProduct>(`/product`, {product});
    }

    static deleteProduct(product: IProduct): Promise<AxiosResponse<IProduct>> {
        return $api.delete<IProduct>(`/product/${product._id}`);
    }
}