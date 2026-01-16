import { cartlist } from "../ui/cart-popup";
import Image from "next/image";
import Button from "../ui/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import priceFormater from "@/app/utils/price-formatter";

const CartItems = () => {
    const totalPrice = cartlist.reduce((total, item) => total + item.price * item.qty, 0);
    return (
        <div className="bg-white">
            <div className="py-5 px-4 border-b border-gray-200">
                <h2 className="font-bold text-lg">Cart Items</h2>
                <div className="overflow-auto max-h-[300px]">
                    {
                         cartlist.map((item, index) => (
                             <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
                                 <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                                     <Image src={`/image/products/${item.imgUrl}`} width={63} height={63} alt={item.name} className="aspect-square object-contain"/>
                                 </div>
                                     <div className="self-center">
                                         <div className="text-sm font-medium">{item.name}</div>
                                            <div className="flex gap-3 font-medium text-xs">
                                                <div>{item.qty}x</div>
                                                <div className="text-primary">{priceFormater(item.price)}</div>
                                            </div>
                                         </div>
                                        <Button variant="ghost" className="w-7 h-7 p-0! self-center ml-auto">
                                            <FiTrash2 />
                                        </Button>
                             </div>
                        ))
                    }
                    
                </div>
                 <div className="border-t border-gray-200 p-4">
                 <div className="flex justify-between font-semibold">
                    <div className="text-sm">Total</div>
                    <div className="text-primary text-xs">{priceFormater(totalPrice)}</div>
                </div>
                    <Button variant="dark" className="w-full mt-4">
                    <FiCreditCard /> Proceed to Payment 
                    </Button>
                </div>
             </div>
        </div> 
    );
};

export default CartItems;