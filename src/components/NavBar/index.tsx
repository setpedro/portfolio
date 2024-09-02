import Image from "next/image";
import Link from "next/link";
import { Button } from "../UI/Button";

export default function NavBar() {
  const navLinks = [
    { label: "Links", href: "/#links" },
    { label: "Work", href: "/#work" },
    { label: "Skills", href: "/#skills" },
  ];

  return (
    <div className="w-full flex items-center justify-between py-6 px-9">
      <Link href="/">
        <Button size="icon" color="none" border="none">
          <Image src="/Logo.svg" alt="Logo" width={40} height={20} />
        </Button>
      </Link>
      <div className="flex items-center gap-9 font-bold">
        {navLinks.map((link, i) => (
          <Link href={link.href} key={i}>
            <Button size="sm" color="none" border="none">
              {link.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
