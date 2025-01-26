import MarqueeFooter from "@/components/MarqueeFooter";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/UI/Button";
import HashLink from "@/components/UI/HashLink";
import Image from "next/image";

export default function PedroSerrano() {
  return (
    <div className="flex flex-col h-full">
      <NavBar />
      <div className="w-full h-screen flex items-center justify-center gap-16 px-9">
        <Image
          src="Squares.svg"
          alt="Logo"
          width={256}
          height={256}
          priority
          className="hidden md:block"
        />
        <div className="flex flex-col gap-12 font-bold">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl">Pedro Serrano</h1>
            <p>Where passion meets code.</p>
          </div>
          <Button size="md" color="none" border="md" className="w-fit">
            <HashLink href="#work">Take a look</HashLink>
          </Button>
        </div>
      </div>
      <MarqueeFooter hasChevron />
    </div>
  );
}
