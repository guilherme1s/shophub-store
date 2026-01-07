import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { NavLink } from "react-router-dom";
import { footerSections } from "../utils/footerSections";

export function Footer() {
  const socialIcons = [
    {
      id: 1,
      icon: <FacebookOutlinedIcon />,
      url: "#",
    },
    {
      id: 2,
      icon: <InstagramIcon />,
      url: "#",
    },
    {
      id: 3,
      icon: <XIcon />,
      url: "#",
    },
  ];

  const bottomLinks = [
    {
      id: 1,
      title: "Segurança",
      url: "#",
    },
    {
      id: 2,
      title: "Acessibilidade",
      url: "#",
    },
    {
      id: 3,
      title: "Mapa do site",
      url: "#",
    },
  ];

  return (
    <footer className="w-full bg-foreground text-white py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 py-10 max-w-7xl mx-4 md:mx-8 xl:mx-auto border-b border-white/20">
        <div>
          <h1 className="font-bold mb-4 text-lg">ShopHub</h1>
          <p className="text-gray-300 text-md">
            Seu marketplace confiável para milhões de produtos com proteção do
            comprador e frete grátis.
          </p>
        </div>

        {footerSections.map((section) => (
          <div key={section.id}>
            <h2 className="font-bold mb-4 text-lg">{section.title}</h2>

            <ul className="flex flex-col gap-2">
              {section.links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.url}
                    className="text-gray-300 hover:text-primary transition"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="font-bold mb-4 text-lg">NOS ACOMPANHE</h2>

          <div className="flex gap-4 text-gray-300">
            {socialIcons.map((social) => (
              <NavLink
                key={social.id}
                to={social.url}
                className="p-2 rounded-md bg-white/20 hover:bg-primary transition"
              >
                {social.icon}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="text-md flex flex-col gap-4 lg:flex-row justify-between max-w-7xl mx-4 md:mx-8 xl:mx-auto mt-10 text-gray-300">
        <p>© 2025 ShopHub. Todos os direitos reservados.</p>

        <ul className="flex gap-4">
          {bottomLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.url} className="hover:text-primary transition">
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
