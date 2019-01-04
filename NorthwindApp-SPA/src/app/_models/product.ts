export interface Product {
  productId: number;
  productName: string;
  categoryName: string;
  categoryId: number;
  unitPrice?: number;
  supplierId?: number;
  supplierName: string;
  quantityPerUnit?: string;
  unitsInStock?: number;
  unitsOnOrder?: number;
  reorderLevel?: number;
  discontinued: boolean;
}
