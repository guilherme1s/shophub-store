import { useState } from "react";
import { useCart } from "../contexts/CartContext";

export function useCheckout() {
  const { items, clearCart } = useCart();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    number | null
  >(null);
  const [shippingValidity, setShippingValidity] = useState(false);
  const [open, setOpen] = useState(false);

  const subtotal = items.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const toggleDialog = () => {
    setOpen((prev) => !prev);
    clearCart();
  }

  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  const canFinish = selectedPaymentMethod !== null && shippingValidity;

  return {
    items,
    subtotal,
    shipping,
    total,
    open,
    canFinish,
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    setShippingValidity,
    toggleDialog,
  };
}
