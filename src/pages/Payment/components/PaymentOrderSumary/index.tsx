import { formatPrice } from "../../../../utils/formatPrice";

interface ProductList {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface OrderSumaryProps {
  subtotal: number;
  shipping: number;
  total: number;
  products: ProductList[];
}

export function PaymentOrderSumary({
  subtotal,
  shipping,
  products,
  total,
}: OrderSumaryProps) {
  return (
    <div className="bg-primary/10 w-full rounded-xl p-8 h-fit flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Resumo do pedido</h1>

      <div className="flex flex-col gap-3 pb-4 border-b border-gray-300">
        {products.map((product) => (
          <div key={product.id} className="flex justify-between gap-10">
            <p className="text-gray-600">
              {product.title} (x{product.quantity})
            </p>
            <p className="font-bold whitespace-nowrap">
              {formatPrice(product.price)}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 pb-4 border-b border-gray-300">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-bold">{formatPrice(subtotal)}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600">Frete</p>
          <p className="font-bold">{formatPrice(shipping)}</p>
        </div>
      </div>

      <div className="flex justify-between text-2xl font-extrabold mt-2">
        <p>Total</p>
        <p className="text-primary">{formatPrice(total)}</p>
      </div>
    </div>
  );
}
