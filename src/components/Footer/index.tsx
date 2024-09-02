"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

type FooterProps = {
  hasChevron: boolean;
};

export default function Footer({ hasChevron }: FooterProps) {
  const [iterations, setIterations] = useState(0);

  useEffect(() => {
    const calculateIterations = () => {
      const width = window.innerWidth;
      setIterations(Math.ceil((width - 58) / 2 / 86));
    };

    calculateIterations();

    window.addEventListener("resize", calculateIterations);

    return () => {
      window.removeEventListener("resize", calculateIterations);
    };
  }, []);

  const Marquees = () => (
    <>
      {Array.from({ length: iterations }).map((_, i) => (
        <div key={i} className="relative w-[86px] h-[26px]">
          <Image
            src="/IndividualMarquee.svg"
            alt="Marquee"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </>
  );

  return (
    <div className="w-full h-14 flex items-center justify-center bg-foreground py-4">
      {hasChevron ? (
        <div className="absolute bottom-0 flex items-center justify-center bg-foreground px-4 pb-2.5 h-12 z-10 transition-transform duration-300 ease-in-out group hover:translate-y-[-4px]">
          <Link href="/#work">
            <Image
              src="/ChevronDown.svg"
              alt="Chevron down"
              width={28}
              height={28}
            />
          </Link>
        </div>
      ) : (
        ""
      )}

      <Marquee gradient={false} speed={50} direction="right" autoFill={true}>
        <div className="flex items-center scale-x-[-1]">
          <Marquees />
        </div>
      </Marquee>
    </div>
  );
}
