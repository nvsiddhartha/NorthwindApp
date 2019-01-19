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
}
