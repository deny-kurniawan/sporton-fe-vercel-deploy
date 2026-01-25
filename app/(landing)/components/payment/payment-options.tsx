import { FiCreditCard } from "react-icons/fi";
import CardWithHeadar from "../ui/card-with-header";
import { getAllBanks } from "@/app/services/bank.service";

const PaymentOptions = async () => {
    const banks = await getAllBanks();
    return (
        <CardWithHeadar title="Payment Options">
            {
                banks.map((paymentList, index) => (
                    <div className="flex gap-5 p-5 border-b border-gray-100" key={index}>
                        <div className="bg-blue-100 p-4 text-blue-500 f-fit self-center">
                            <FiCreditCard size={24}/>
                        </div>
                        <div className="slef-center">
                            <div className="font-bolder">
                                {paymentList.bankName}
                            </div>
                            <div className="text-sm">{paymentList.accountNumber}</div>
                             <div className="text-sm opacity-70">{paymentList.accountName}</div>
                        </div>
                        <div className="mx-auto bg-blue-50 text-gray-800 text-xs h-fit self-center px-2 py-1">Bank Transfer</div>
                    </div>
                ))
            }
        </CardWithHeadar>
    )
};

export default PaymentOptions;