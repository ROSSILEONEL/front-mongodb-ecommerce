export interface ProductProp {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
}
// --> hacer la interface del carrito
export interface CartProp {
  user:'string',
cart: Array<ProductProp>,
total: number
}


