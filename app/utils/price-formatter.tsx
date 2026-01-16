const priceFormater = (price:number) => {
    const newFormat = Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR", maximumSignificantDigits: 5,}).format(price);

    return newFormat;
}

export default priceFormater;