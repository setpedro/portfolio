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
};

export const WORKS: Work[] = [
    {
        contents: {
            title: "Snaike",
            description:
                "Browser-based snake game built with Rust + WASM. Smooth movement, high performance, and an AI opponent.",
            buttons: {
                websiteButtonColor: "snaike",
                websiteLink: "https://snaike.vercel.app/",
                moreLink: "https://github.com/setPedro/snaike",
            },
        },
        logo: "/Work/SnaikeLogo.png",
    },
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
                    alt: "Balances Solana Mirror",
                },
            ],
        },
        logo: "/Work/SolanaMirrorLogo.svg",
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
    },
];
