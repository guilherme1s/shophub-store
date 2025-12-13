import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ReplayIcon from "@mui/icons-material/Replay";

export function PromoSection() {
  const promoSectionContent = [
    {
      id: 1,
      icon: <LocalShippingOutlinedIcon />,
      title: "Frete grátis",
      description: "Compras acima de R$ 100,00",
    },
    {
      id: 2,
      icon: <ShieldOutlinedIcon />,
      title: "Segurança",
      description: "Transações seguras",
    },
    {
      id: 3,
      icon: <ReplayIcon />,
      title: "Devolução",
      description: "Garantia de rembolso em até 30 dias",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {promoSectionContent.map((content) => {
        return (
          <div className="flex gap-2" key={content.id}>
            <span className="bg-primary/20 p-3 rounded-lg text-primary">
              {content.icon}
            </span>
            <div className="leading-6">
              <p className="font-bold text-lg">{content.title}</p>
              <p className="text-gray-600 text-md">{content.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
