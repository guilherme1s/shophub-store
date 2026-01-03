import { Container } from "../../components/Container";
import { ProductDetails } from "./components/ProductDetails";
import { useState } from "react";
import { useGetSelectedProduct } from "../../hooks/useGetSelectedProduct";
import { useCart } from "../../contexts/CartContext";
import { categoryMap } from "../../utils/CategoryMap";
import { Suggestion } from "./components/Suggestion";

export function Product() {
  const product = useGetSelectedProduct();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [add, setAdd] = useState(false);

  if (!product) {
    return;
  }

  const totalPrice = product.price * quantity;
  const translatedCategory = categoryMap[product.category] ?? product.category;

  const handleIncreaseQuantity = () => {
    setAdd(false);
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setAdd(false);
    setQuantity((prev) => prev - 1);
  };

  const handleAddProductToCart = () => {
    setAdd(true);

    addItem(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      },
      quantity
    );
  };

  return (
    <div className="py-20 flex flex-col">
      <Container>
        <div className="flex flex-col gap-10 border-b pb-14 border-gray-300">
          <ProductDetails
            category={translatedCategory}
            title={product.title}
            src={product.image}
            rate={product.rating.rate}
            price={totalPrice}
            description={product.description}
            reviews={product.rating.count}
            max={10}
            added={add}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
            quantity={quantity}
            onAddProductToCart={handleAddProductToCart}
          />
        </div>
        <div className="mt-14">
          <Suggestion category={product.category} productId={product.id} />
        </div>
      </Container>
    </div>
  );
}
