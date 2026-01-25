import { getAllCategories } from "../services/category.service";
import CategoriesSection from "./components/home/categories";
import HeroSection from "./components/home/hero";
import ProductsSection from "./components/home/products";
import { getAllProducts } from "../services/product.service";
import type { Category, Products } from "@/app/types";


export default async function Home() {
  let categories: Category[] = [];
  let products: Products[] = [];
  let error: string | null = null;

  try {
    [categories, products] = await Promise.all([
      getAllCategories(),
      getAllProducts(),
    ]);
  } catch (err) {
    error = err instanceof Error ? err.message : "Unable to load products and categories";
  }

  if (error) {
    return (
      <main className="container mx-auto py-40">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-red-600">Error Loading Content</h1>
          <p className="text-xl text-gray-600 mb-8">{error}</p>
          <p className="text-gray-500">Please try refreshing the page or contact support if the problem persists.</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <HeroSection/>
      <CategoriesSection categories={categories}/>
      <ProductsSection products={products}/>
    </main>
  );
}
