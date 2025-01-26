"use client";

import MarqueeFooter from "@/components/MarqueeFooter";
import { Hyperlink } from "@/components/UI/HyperLink";
import Links from "@/sections/Links";
import PedroSerrano from "@/sections/PedroSerrano";
import Skills from "@/sections/Skills";
import Work from "@/sections/Work";
import { scrollToHash } from "@/utils";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      scrollToHash(window.location.hash);
    }
  }, []);

  return (
    <main className="flex flex-col gap-[72px] h-screen">
      <PedroSerrano />
      <div id="work">
        <Work />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="links">
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
        <MarqueeFooter hasChevron={false} />
      </div>
    </main>
  );
}
