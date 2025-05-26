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
        <main className="flex flex-col h-screen">
            <div className="flex flex-col flex-grow justify-center items-center">
                <div className="flex flex-col items-center">
                    <div>Coming soon...</div>
                    <p className="text-center my-2 text-xs font-semibold">
                        <Hyperlink
                            href="https://github.com/setPedro/portfolio"
                            className="border-b hover:text-link-hover-blue hover:border-link-hover-blue"
                        >
                            stay tuned
                        </Hyperlink>
                    </p>
                </div>
            </div>
            <MarqueeFooter hasChevron={false} />
        </main>
    );
}
