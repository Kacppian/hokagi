import React from "react";

interface ButtonProps {
  variant?: "default" | "secondary" | "primary" | "danger";
  children: React.ReactNode;
  onClick?: () => void;
}

const variantClasses = {
  default: "bg-default hover:bg-gray-700 text-white rounded-xl",
  secondary: "bg-blue-500 hover:bg-blue-700 text-white",
  primary: "bg-green-500 hover:bg-green-700 text-white",
  danger: "bg-red-500 hover:bg-red-700 text-white",
};

const Button: React.FC<ButtonProps> = ({ variant = "default", children, onClick }) => {
  return (
    <button
      className={`px-8 py-4 rounded ${variantClasses[variant]} font-default`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
