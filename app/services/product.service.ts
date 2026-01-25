import { Products } from "../types";
import { fetchAPI } from "../lib/api";

export const getAllProducts = async (): Promise<Products[]> => {
    return await fetchAPI<Products[]>("/products");
};

export const getProductDetails = async (id: string): Promise<Products> => {
    return await fetchAPI<Products>(`/products/${id}`);
}