export type FilterState = {
  size?: string[];
  color?: string[];
  price?: [number, number];
  style?: string[];
};

export const SIZES = ["XS", "S", "M", "L", "XL"];
export const COLORS = ["Noir", "Blanc", "Bleu", "Vert", "Rose"];
export const STYLES = ["Classique", "Décontracté", "Sport", "Élégant"];
