import Image from "next/image";
import Link from "next/link";
import { Button } from "../UI/Button";
import HashLink from "../UI/HashLink";

export default function NavBar() {
  const navLinks = [
    { label: "Links", href: "#links" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <div className="w-full flex items-center justify-between py-6 px-9">
      <Link href="/">
        <Button size="icon" color="none" border="none">
          <Image src="/Logo.svg" alt="Logo" width={28} height={14} />
        </Button>
      </Link>
      <div className="flex items-center gap-5 font-bold">
        {navLinks.map((link, i) => (
          <HashLink
            href={link.href}
            key={i}
            className="px-2 py-1 rounded-md text-sm hover:opacity-70 transition duration-300"
          >
            {link.label}
          </HashLink>
        ))}
      </div>
    </div>
  );
}
