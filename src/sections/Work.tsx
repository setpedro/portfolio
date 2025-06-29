import WorkCard from "@/components/WorkCard";
import { cn } from "@/utils";

type Buttons = {
  websiteButtonColor: "solanaMirror" | "snaike" | "usellExperience";
  websiteLink: string;
  moreLink: string;
};

type Visual = {
  src: string;
  width: number;
  alt: string;
};

export type Work = {
  contents: {
    title: string;
    description: string;
    buttons: Buttons;
    visuals?: Visual[];
  };
  logo: string;
  direction: "left" | "right";
};


export default function Work() {
  const works: Work[] = [
    {
      contents: {
        title: "Solana Mirror",
        description:
          "Blockchain tool that facilitates users check their wallet at a glance.",
        buttons: {
          websiteButtonColor: "solanaMirror",
          websiteLink: "",
          moreLink: "https://github.com/solana-mirror",
        },
        visuals: [
          {
            src: "/solanaMirrorDemo.png",
            width: 640,
            alt: "Solana Mirror Demo",
          },
          {
            src: "/balancesSolanaMirror.png",
            width: 512,
            alt: "Balances Solana Mirror"
          }
        ],
      },
      logo: "/Work/SolanaMirrorLogo.svg",
      direction: "left",
    },
    {
      contents: {
        title: "Snaike",
        description: "Browser-based snake game built with Rust + WASM. Smooth movement, high performance, and an AI opponent.",
        buttons: {
          websiteButtonColor: "snaike",
          websiteLink: "https://snaike.vercel.app/",
          moreLink: "https://github.com/setPedro/snaike"
        },
      },
      logo: "/Work/SnaikeLogo.svg",
      direction: "right"
    },
    {
      contents: {
        title: "uSell Experience",
        description:
          "AI tool that provides custom reviews of a given website, both in terms of UI and performance",
        buttons: {
          websiteButtonColor: "usellExperience",
          websiteLink: "https://usell-experience.vercel.app/",
          moreLink: "https://github.com/setPedro/usell-experience",
        },
      },
      logo: "/Work/UsellExperienceLogo.svg",
      direction: "left",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6 w-full px-24">
      <h1 className="text-3xl font-bold">Work</h1>
      <div className="flex flex-col gap-9">
        {works.map((work, i) => (
          <div
            key={i}
            className={cn(
              "transform transition-transform duration-300 ease-in-out",
              work.direction === "left"
                ? "xl:hover:-translate-x-48"
                : "xl:hover:translate-x-48"
            )}
          >
            <WorkCard
              contents={work.contents}
              logo={work.logo}
              direction={work.direction}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
