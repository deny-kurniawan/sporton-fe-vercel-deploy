export interface Category {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
}

export interface Products {
    _id: string;
    name: string;
    description: string;
    category: Category;
    price: number;
    stock: number;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
}

export interface Bank {
    _id: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
    createdAt: string;
    updatedAt: string;
}

export interface Transaction {
    _id: string;
    paymentProff: string;
    status: "PENDING" | "PAID" | "REJECTED";
    purchaseItems: {
        productId: string;
        qty: number;
    },
    totalPayment: string;
    customerContact: number | null;
    custumerAddress: string;
    createdAt: string;
    updatedAt: string;
}