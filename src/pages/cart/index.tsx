import { Container } from "../../Components/Container";
import { SectionTitle } from "../../Components/SectionTitle";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { EmptyCart } from "./components/EmptyCart";
import { useCart } from "../../contexts/CartContext";
import { CartList } from "./components/CartList";
import { OrderSumary } from "./components/OrderSumary";

export function Cart() {
  const { items, removeItem, increaseQuantity, decreaseQuantity } = useCart();

  const subtotal = items.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const shipping = subtotal > 100 ? 0 : 10;
  const totalPrice = subtotal + shipping;

  return (
    <main className="my-20">
      <section>
        <Container>
          <SectionTitle
            title="Meu carrinho"
            hasBorder={false}
            hasIcon
            icon={<ShoppingBagOutlinedIcon fontSize="large" />}
          />
        </Container>
      </section>

      <section className="mt-10">
        <Container>
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
              <CartList
                list={items}
                max={10}
                onDecreaseQuantity={decreaseQuantity}
                onIncreaseQuantity={increaseQuantity}
                onRemoveProduct={removeItem}
              />

              <div className="lg:sticky lg:top-24 self-start">
                <OrderSumary
                  subtotal={subtotal}
                  shipping={shipping}
                  total={totalPrice}
                />
              </div>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
