import { cn } from "@/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
};

export const Hyperlink = ({ children, href, className }: Props) => {
  const classes = {
    common: "",
  };
  return (
    <a
      className={cn(classes.common, className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
