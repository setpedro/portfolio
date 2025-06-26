import { cn } from "@/utils";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  size: "icon" | "sm" | "md" | "none";
  color: "solanaMirror" | "snaike" | "usellExperience" | "none";
  border: "md" | "none";
  className?: string;
};

export const Button = ({
  children,
  onClick,
  size,
  color,
  border,
  className,
}: ButtonProps) => {
  const classes = {
    common:
      "rounded-md text-xs sm:text-sm md:text-lg hover:opacity-70 transition duration-300",
    sizes: {
      icon: "p-[7px] sm:p-[9px] md:p-[13px]",
      sm: "px-2 py-1",
      md: "px-4 py-2",
      none: "px-0 py-0",
    },
    colors: {
      solanaMirror: "bg-solanaMirror",
      snaike: "bg-snaike",
      usellExperience: "bg-usellExperience",
      none: "none",
    },
    borders: {
      md: "border-2",
      none: "",
    },
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        classes.common,
        classes.sizes[size],
        classes.colors[color],
        classes.borders[border],
        className
      )}
    >
      {children}
    </button>
  );
};
