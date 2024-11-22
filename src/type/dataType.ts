import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// ************* product prop data type  *************
export interface ProductsProps {
  id: number;
  title: string;
  price: number;
  category:{name: string};
  images: string[];
  description:string;
}

// ************************* button data type **********
export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  label?: string;
}

// **************************
export interface ProductsProp {
  products: ProductsProps[];
}

// ******************pagination button props **********************

export interface PaginationButtonProps {
  page: number;
  router: AppRouterInstance;
  handlePrevious: () => void;
  handleNext: () => void;
}
