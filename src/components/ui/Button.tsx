import { ReactNode } from "react";

interface Variants {
  [key: string]: string;
}

// component button
const Button = ({
  children,
  variant = "primary",
  buttonType = "button",
  onClick,
  dataTest = "",
  className = "",
}: {
  children: ReactNode;
  variant?: string;
  buttonType?: "button" | "submit" | "reset";
  onClick?: () => void;
  dataTest?: string;
  className?: string;
}) => {
  const variants: Variants = {
    primary:
      "bg-primary-500 text-white p-1 px-3 rounded-md hover:bg-primary-400 m-0",
    secondary:
      "bg-secondary-700 text-white p-1 px-3 rounded-md hover:bg-secondary-600 m-0",
    danger: "bg-red-500 text-white p-1 px-3 rounded-md hover:bg-red-400 m-0",
  };

  return (
    <button
      data-testid={dataTest}
      type={buttonType}
      className={`${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
