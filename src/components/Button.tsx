import React from "react";
import { ButtonProps } from "@/type/dataType";
const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  className = "",
  label,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-28
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
        ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
