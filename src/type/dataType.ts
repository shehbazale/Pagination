// ************* product prop data type  *************
export interface ProductsProps {
  id: number;
  title: string;
  price: number;
  // category:{image: string};
  images: string[];
}

// ************************* button data type **********
export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  label?: string;
}
