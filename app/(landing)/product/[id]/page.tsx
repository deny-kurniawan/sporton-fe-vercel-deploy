import Image from "next/image";
import Link from "next/link";
import ProductAction from "../../components/product-detail/product-actions";
import priceFormater from "@/app/utils/price-formatter";
import { getProductDetails } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";

export type TPageProps = {
    params: Promise<{id: string}>;
}

const ProductDetail = async ({params}: TPageProps) => {
    const {id}  = await params;
    let product = null;
    let errorMessage = "";

    try {
        product = await getProductDetails(id);
    } catch (error) {
        errorMessage = error instanceof Error ? error.message : "Unable to load product details";
    }

    if (errorMessage) {
        return (
            <main className="container mx-auto py-40 flex justify-center items-center min-h-[80vh]">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-6 text-red-600">Product Not Found</h1>
                    <p className="text-xl text-gray-600 mb-8">{errorMessage}</p>
                    <Link href="/" className="text-primary font-semibold hover:underline">
                        Back to Home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="container mx-auto py-40 flex gap-12">
            <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
                <Image src={getImageUrl(product!.imageUrl)} width={550} height={550} alt={product!.name} className="aspect-square object-contain w-full"/>
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">{product!.name}</h1>
                <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-5">{product!.category.name}</div>
                <p className="leading-loose mb-8">{product!.description}</p>
                <div className="text-primary text-[32px] font-semibold mb-12">
                    {priceFormater(product!.price)}
                </div>
                <ProductAction product={product!} stock={product!.stock}/>
            </div>
        </main>
    )
}

export default ProductDetail;