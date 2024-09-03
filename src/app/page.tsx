"use client";

import Footer from "@/components/Footer";
import { Hyperlink } from "@/components/UI/HyperLink";
import useHash from "@/hooks/useHash";
import Links from "@/sections/Links";
import PedroSerrano from "@/sections/PedroSerrano";
import Skills from "@/sections/Skills";
import Work from "@/sections/Work";
import { useEffect, useRef } from "react";

export default function Home() {
  const workRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const hash = useHash();

  useEffect(() => {
    switch (hash) {
      case "#work":
        workRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "#skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "#links":
        linksRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }, [hash]);

  return (
    <main className="flex flex-col gap-[72px] h-screen">
      <PedroSerrano />
      <div ref={workRef}>
        <Work />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={linksRef}>
        <Links />
      </div>
      <div>
        <p className="text-center mb-2 text-xs font-semibold">
          The code for this porfolio is public and can be viewed{" "}
          <Hyperlink
            href="https://github.com/setPedro/portfolio"
            className="border-b hover:text-[#add8e6] hover:border-[#add8e6]"
          >
            here
          </Hyperlink>
          .
        </p>
        <Footer hasChevron={false} />
      </div>
    </main>
  );
}
