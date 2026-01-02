import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

export function ProductBenefits() {
  const benefits = [
    {
      id: 1,
      icon: <LocalShippingOutlinedIcon />,
      title: "Frete grátis",
      text: "Compras acima de R$ 100,00",
    },
    {
      id: 2,
      icon: <ShieldOutlinedIcon />,
      title: "Segurança",
      text: "Transações seguras",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      {benefits.map((benefit) => {
        return (
          <div
            key={benefit.id}
            className="flex gap-2 bg-gray p-2 rounded-xl lg:w-1/2"
          >
            <span className="p-3 rounded-lg text-primary">{benefit.icon}</span>
            <div className="leading-6">
              <p className="font-bold text-lg">{benefit.title}</p>
              <p className="text-gray-600 text-md">{benefit.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
