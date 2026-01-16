const OrderInformation = () => {
    return (
        <div className="bg-white">
            <div className="p-5 border-b border-gray-200">
                <h2 className="font-bold text-lg">Order Information</h2>
                <div className="p5">
                    <div className="input-group">
                        <label htmlFor="full_name">Full Name</label>
                        <input type="text" placeholder="Type your full name" id="full_name"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderInformation;