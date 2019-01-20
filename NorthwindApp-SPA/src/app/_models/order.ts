export interface Order {
    orderId: number;
    customerId: string;
    employeeId?: number;
    orderDate?: Date;
    requiredDate?: Date;
    shippedDate?: number;
    shipVia?: number;
    freight?: number;
    shipAddress: string;
    shipCity: string;
    shipRegion: string;
    shipPostalCode: string;
    shipCountry: string;
    employee: string;
    customer: string;
    orderDetails: OrderDetail[];
}

export interface OrderDetail {
    orderId: number;
    productId: number;
    unitPrice: number;
    quantity: number;
    discount: number;
}
