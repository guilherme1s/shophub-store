import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

export function Footer() {
  const footerLinks = [
    {
      id: 1,
      title: "COMPRAR",
      url: ["Todos os produtos", "Eletrônicos", "Moda", "Promoção"],
    },
    {
      id: 2,
      title: "SUPORTE",
      url: [
        "Central de Ajuda",
        "Entre em Contato",
        "Perguntas Frequentes",
        "Informações de Frete",
      ],
    },
    {
      id: 4,
      title: "SOBRE",
      url: [
        "Sobre Nós",
        "Privacidade",
        "Termos e Condições",
        "Central do Vendedor",
      ],
    },
  ];

  const socialIcons = [<FacebookOutlinedIcon />, <InstagramIcon />, <XIcon />];

  const bottonLinks = [
    {
      id: 1,
      title: "Segurança",
    },
    {
      id: 2,
      title: "Acessibilidade",
    },
    {
      id: 3,
      title: "Mapa do site",
    },
  ];

  return (
    <footer className="w-full bg-foreground text-white py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 py-10 w-auto max-w-7xl mx-4 md:mx-8 xl:mx-auto border-b-[0.25px] border-gray-300">
        <div>
          <h1 className="font-bold mb-4 text-lg">ShopHub</h1>
          <p className="text-gray-300 text-md">
            Seu marketplace confiável para milhões de produtos com proteção do
            comprador e frete grátis.
          </p>
        </div>

        {footerLinks.map((item) => {
          return (
            <div key={item.id}>
              <h1 className="font-bold mb-4 text-lg">{item.title}</h1>

              <ul className="flex flex-col gap-2">
                {item.url.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className="text-gray-300 text-md hover:text-primary transition"
                    >
                      <a href="#">{link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        <div>
          <h1 className="font-bold mb-4 text-lgs">NOS ACOMPANHE</h1>

          <div className="flex gap-4 text-gray-300">
            {socialIcons.map((icon, index) => {
              return (
                <button
                  key={index}
                  className="p-2 transition cursor-pointer rounded-md hover:bg-primary bg-white/20"
                >
                  {icon}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-md flex flex-col gap-2 lg:flex-row justify-between w-auto max-w-7xl mx-4 md:mx-8 xl:mx-auto mt-10 text-gray-300">
        <p>© 2025 ShopHub. Todos os direitos reservados.</p>

        <ul className="flex gap-4">
          {bottonLinks.map((link) => {
            return (
              <li key={link.id} className="hover:text-primary transition">
                <a href="#">{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
