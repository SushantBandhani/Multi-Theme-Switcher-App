import { GiTreehouse } from "react-icons/gi";
import { MdColorLens } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

export const THEME_SETTINGS = [
  {
    id: "1",
    label: "Spring",
    type:'spring',
    icon: GiTreehouse,
    colorClass: "text-green-400", // Spring = Green
  },
  {
    id: "2",
    label: "Lavender",
    type:'lavender',
    icon: MdColorLens,
    colorClass: "text-purple-300", // Lavender = Purple/Lavender
  },
  {
    id: "3",
    label: "Midnight",
    type:'midnight',
    icon: FaMoon,
    colorClass: "text-yellow-400", // Midnight = Yellow Moon
  },
];
