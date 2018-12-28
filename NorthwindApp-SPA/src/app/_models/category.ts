import { Product } from '../_models/product';

export interface Category {
    categoryId: number;
    categoryName: string;
    description: string;
    products: Product[];
}
