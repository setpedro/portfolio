import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/UI/Button";
import Image from "next/image";
import Link from "next/link";

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
          className="hidden md:block"
        />
        <div className="flex flex-col gap-12 font-bold">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl">Pedro Serrano</h1>
            <p>Where passion meets code.</p>
          </div>
          <Button size="md" color="none" border="md" className="w-fit">
            <Link href="/#work">Take a look</Link>
          </Button>
        </div>
      </div>
      <Footer hasChevron />
    </div>
  );
}
