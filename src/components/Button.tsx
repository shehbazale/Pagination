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
      className={`text-black  transition-all ease-in-out duration-500 hover:bg-gray-200
         text-sm px-5 py-2.5 text-center focus:outline-none border border-gray-300 
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
        ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
