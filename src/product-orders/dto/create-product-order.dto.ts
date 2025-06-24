export class CreateProductOrderDto {
  buyerId: number;
  productId: number;
  quantity: string;
  total_price: string;
  status: string;
  delivery_address: string;
  phone_number: string;
  kuryerId: number;
  delivery_status: string;
}
