import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { fetchAPI } from "../lib/api";
import { Category } from "../types";


export const getAllCategories = async (): Promise<Category[]> => {
    const res = await fetchAPI<Category[]>("/categories");
    console.log("Categories :", res);
    return res;
};