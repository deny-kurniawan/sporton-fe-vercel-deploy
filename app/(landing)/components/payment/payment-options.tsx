import { FiCreditCard } from "react-icons/fi";
import CardWithHeadar from "../ui/card-with-header";

const paymentList = [
    {
        bank_name: "BCA",
        account_number: 80123182312 ,
        account_holder: "PT SportOn Digital"
    },

    {
        bank_name: "MANDIRI",
        account_number: 83923912013203123,
        account_holder: "PT SportOn Digital"
    },

     {
        bank_name: "BTPN",
        account_number: 5238218923,
        account_holder: "PT SportOn Digital"
    },
]

const PaymentOptions = () => {
    return (
        <CardWithHeadar title="Payment Options">
            {
                paymentList.map((paymentList, index) => (
                    <div className="flex gap-5 p-5 border-b border-gray-100" key={index}>
                        <div className="bg-blue-100 p-4 text-blue-500 f-fit self-center">
                            <FiCreditCard size={24}/>
                        </div>
                        <div className="slef-center">
                            <div className="font-bolder">
                                {paymentList.bank_name}
                            </div>
                            <div className="text-sm">{paymentList.account_number}</div>
                             <div className="text-sm opacity-70">{paymentList.account_holder}</div>
                        </div>
                        <div className="mx-auto bg-blue-50 text-gray-800 text-xs h-fit self-center px-2 py-1">Bank Transfer</div>
                    </div>
                ))
            }
        </CardWithHeadar>
    )
};

export default PaymentOptions;