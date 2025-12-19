import type { Category } from "../types/category";

import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import FaceRetouchingNaturalOutlinedIcon from "@mui/icons-material/FaceRetouchingNaturalOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

export const categories: Category[] = [
  {
    id: 1,
    title: "Eletrônicos",
    icon: <SmartphoneOutlinedIcon fontSize="large" />,
    color: "blue",
    url: "/catalogo",
    redirectTitle: "exemplo 1",
  },
  {
    id: 2,
    title: "Moda",
    icon: <CheckroomOutlinedIcon fontSize="large" />,
    color: "pink",
    url: "/catalogo",
    redirectTitle: "exemplo 1",
  },
  {
    id: 3,
    title: "Casa",
    icon: <HomeOutlinedIcon fontSize="large" />,
    color: "amber",
    url: "/catalogo",
    redirectTitle: "exemplo 1",
  },
  {
    id: 4,
    title: "Esportes",
    icon: <SportsSoccerOutlinedIcon fontSize="large" />,
    color: "green",
    url: "/catalogo",
    redirectTitle: "exemplo 1",
  },
  {
    id: 5,
    title: "Beleza",
    icon: <FaceRetouchingNaturalOutlinedIcon fontSize="large" />,
    color: "purple",
    url: "/catalogo",
    redirectTitle: "exemplo 1",
  },
  {
    id: 6,
    title: "Livros",
    icon: <AutoStoriesOutlinedIcon fontSize="large" />,
    color: "red",
    url: "/catalogo",
    redirectTitle: "exemplo 1",
  },
];
