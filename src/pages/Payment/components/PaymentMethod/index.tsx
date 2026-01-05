import { StepTitle } from "../../../../components/StepTitle";
import { PaymentCard } from "../PaymentCard";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import PixOutlinedIcon from "@mui/icons-material/PixOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

interface PaymentMethodProps {
  selectedMethod: number | null;
  onSelected: (id: number) => void;
}

export function PaymentMethod({
  onSelected,
  selectedMethod,
}: PaymentMethodProps) {
  const paymentMethods = [
    {
      id: 1,
      icon: <CreditCardOutlinedIcon />,
      title: "Cartão de crédito",
      description: "Visa, MasterCard, Elo",
    },
    {
      id: 2,
      icon: <PixOutlinedIcon />,
      title: "PIX",
      description: "Pagamento instantâneo",
    },
    {
      id: 3,
      icon: <ArticleOutlinedIcon />,
      title: "Boleto bancário",
      description: "Vencimento em 3 dias úteis",
    },
    {
      id: 4,
      icon: <AccountBalanceWalletOutlinedIcon />,
      title: "PayPal",
      description: "Conta do PayPal ou cartão",
    },
  ];

  return (
    <div className="bg-gray p-8 rounded-xl">
      <StepTitle step={3} title="Método de Pagamento" />

      <div className="flex flex-col gap-4 mt-10">
        {paymentMethods.map((method) => {
          return (
            <PaymentCard
              key={method.id}
              icon={method.icon}
              title={method.title}
              description={method.description}
              checked={selectedMethod === method.id}
              onSelected={() => onSelected(method.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
