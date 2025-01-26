import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function HashLink({ href, children, className }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (window.location.hash === href) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      history.pushState(null, "", href);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
