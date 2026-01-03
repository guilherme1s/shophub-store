import { useParams } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";

export function useGetSelectedProduct() {
  const { products } = useProduct();

  const { id } = useParams();

  const productSelected = products.find((p) => p.id === Number(id));
  return productSelected;
}
