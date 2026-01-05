import { Container } from "../../components/Container";
import { SectionTitle } from "../../components/SectionTitle";
import { PaymentMethod } from "./components/PaymentMethod";
import { ShippingDataForm } from "./components/ShippingDataForm";
import type { ShippingData } from "../../types/shippingData";
import { PaymentOrderSumary } from "./components/PaymentOrderSumary";
import { PaymentFinishedDialog } from "./components/PaymentFinishedDialog";
import { EmptyPendingPayments } from "./components/EmptyPendingPayments";
import { useCheckout } from "../../hooks/useCheckout";

export function Payment() {
  const {
    canFinish,
    items,
    open,
    setSelectedPaymentMethod,
    setShippingValidity,
    shipping,
    subtotal,
    toggleDialog,
    total,
    selectedPaymentMethod,
  } = useCheckout();

  const handleSaveShipping = (data: ShippingData) => {
    console.log("DADOS DO FORM:", data);
  };

  const buttonEnabledClass =
    "cursor-pointer bg-primary hover:bg-primary-hover transition";

  const buttonDisabledClass = "bg-primary cursor-not-allowed opacity-60";

  return (
    <div className="my-20">
      {items.length >= 1 ? (
        <Container>
          <SectionTitle
            title="Finalizar Compra"
            description="Informe seus dados e escolha a forma de pagamento para concluir"
          />

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] mt-10 gap-4">
            <div className="flex flex-col gap-4">
              <ShippingDataForm
                submitForm={handleSaveShipping}
                onValidityChange={setShippingValidity}
              />

              <PaymentMethod
                onSelected={setSelectedPaymentMethod}
                selectedMethod={selectedPaymentMethod}
              />
            </div>

            <div className="lg:sticky lg:top-24 self-start">
              <PaymentOrderSumary
                products={items}
                shipping={shipping}
                subtotal={subtotal}
                total={total}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
            <button
              type="submit"
              form="shippingForm"
              onClick={toggleDialog}
              disabled={!canFinish}
              className={`${
                canFinish ? buttonEnabledClass : buttonDisabledClass
              } p-3 text-center font-bold text-white mt-6 w-full rounded-lg`}
            >
              Concluir Compra
            </button>
          </div>
        </Container>
      ) : (
        <Container>
          <EmptyPendingPayments />
        </Container>
      )}

      {open && (
        <PaymentFinishedDialog
          onCloseDialog={toggleDialog}
        />
      )}
    </div>
  );
}
