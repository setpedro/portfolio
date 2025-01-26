import { scrollToHash } from "@/utils";
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

    if (window.location.hash !== href) {
      history.pushState(null, "", href);
    }
    scrollToHash(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
