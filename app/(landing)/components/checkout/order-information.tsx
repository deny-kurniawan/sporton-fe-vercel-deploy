import CardWithHeadar from "../ui/card-with-header";

const OrderInformation = () => {
    return (
        <CardWithHeadar title="Order Information">
            <div className="bg-white">
            <div className="py-5 px-4 border-b border-gray-200">
                <h2 className="font-bold text-lg">Order Information</h2>
                <div className="p-5">
                    <div className="input-group">
                        <label htmlFor="full_name">Full Name</label>
                        <input type="text" placeholder="Type your full name" id="full_name"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="wa_number">Whatsapp Number</label>
                        <input type="text" placeholder="+62xxxx" id="wa_number"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="shipping_address">Shipping Address</label>
                        <textarea placeholder="Example Street, 18, West Jakarta, Indonesia, 66521" id="shipping_address" rows={7}/>
                    </div>
                </div>
            </div>
        </div>
        </CardWithHeadar>
    )
}

export default OrderInformation;