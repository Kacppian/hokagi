import React from "react";

interface ButtonProps {
  variant?: "default" | "secondary" | "primary" | "danger";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const variantClasses = {
  default: "bg-default hover:bg-gray-700 text-white rounded-xl",
  secondary: "bg-blue-500 hover:bg-blue-700 text-white",
  primary: "bg-green-500 hover:bg-green-700 text-white",
  danger: "bg-red-500 hover:bg-red-700 text-white",
  disabled: "bg-black text-white rounded-xl opacity-[0.5]"
};

const Button: React.FC<ButtonProps> = ({ variant = "default", children, onClick, disabled }) => {
  return (
    <button
      className={`px-4 py-3 rounded-xl font-default text-white ${disabled ? variantClasses.disabled : variantClasses[variant]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
