import type { Category } from "../types/category";

import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import Man2OutlinedIcon from '@mui/icons-material/Man2Outlined';
import Woman2OutlinedIcon from '@mui/icons-material/Woman2Outlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

export const categories: Category[] = [
  {
    id: 1,
    title: "Roupas Masculinas",
    icon: <Man2OutlinedIcon fontSize="large" />,
    color: "blue",
    url: "/catalogo?categoria=men's clothing",
    redirectTitle: "exemplo 1",
  },
  {
    id: 2,
    title: "Joias",
    icon: <DiamondOutlinedIcon fontSize="large" />,
    color: "pink",
    url: "/catalogo?categoria=jewelery",
    redirectTitle: "exemplo 1",
  },
  {
    id: 3,
    title: "Eletrônicos",
    icon: <SmartphoneOutlinedIcon fontSize="large" />,
    color: "amber",
    url: "/catalogo?categoria=electronics",
    redirectTitle: "exemplo 1",
  },
  {
    id: 4,
    title: "Roupas Femininas",
    icon: <Woman2OutlinedIcon fontSize="large" />,
    color: "green",
    url: "/catalogo?categoria=women's clothing",
    redirectTitle: "exemplo 1",
  }
];
