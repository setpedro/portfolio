"use client";

import { Button } from "@/components/UI/Button";
import { Work } from "@/sections/Work";
import { cn } from "@/utils";
import Image from "next/image";
import { Hyperlink } from "../UI/HyperLink";
import { Modal } from "../UI/Modal";
import { useState } from "react";
import { createPortal } from "react-dom";

type WorkCardProps = {
    direction: "left" | "right"
    work: Work
}

export default function WorkCard({ work, direction }: WorkCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    const { buttons, title, description, visuals } = work.contents

    const websiteButton = (
        <Button
            size="md"
            color={buttons.websiteButtonColor}
            border="none"
            className={cn(
                "h-full",
                buttons.websiteButtonColor === "solanaMirror" &&
                    "text-foreground",
                buttons.websiteButtonColor === "snaike" && "text-foreground"
            )}
            onClick={!buttons.websiteLink ? () => setIsOpen(true) : undefined}
        >
            Website
        </Button>
    );

    return (
        <>
            <div
                className={cn(
                    "max-w-[704px] min-h-48 rounded-3xl flex flex-col sm:flex-row items-center bg-foreground p-4",
                    direction === "right" && "sm:flex-row-reverse"
                )}
            >
                <div className="flex items-center justify-center min-w-48 h-48">
                    <Image
                        src={work.logo}
                        alt={`${title} Logo`}
                        width={108}
                        height={108}
                    />
                </div>
                <div
                    className={cn(
                        "flex flex-col px-4 gap-4",
                        direction === "right"
                            ? "items-end text-end"
                            : "items-start"
                    )}
                >
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-bold">{title}</p>
                        <p className="font-medium">{description}</p>
                    </div>
                    <div className="flex gap-3">
                        {buttons.websiteLink ? (
                            <Hyperlink href={buttons.websiteLink}>
                                {websiteButton}
                            </Hyperlink>
                        ) : (
                            <span>{websiteButton}</span>
                        )}
                        <Hyperlink href={buttons.moreLink}>
                            <Button size="md" color="none" border="md">
                                More
                            </Button>
                        </Hyperlink>
                    </div>
                </div>
            </div>

            {isOpen &&
                createPortal(
                    <Modal
                        onClose={() => setIsOpen(false)}
                        className="z-50 mx-4 sm:mx-12"
                    >
                        <div className="flex flex-col gap-2 items-center">
                            <p className="font-bold text-center">
                                No website available for {title}.
                            </p>
                            <p className="text-center">
                                Want to see what’s under the hood? You can{" "}
                            </p>
                            <Hyperlink
                                href={buttons.moreLink}
                                className="hover:text-link-hover-blue hover:border-link-hover-blue"
                            >
                                [view the project]
                            </Hyperlink>
                        </div>
                        {visuals && (
                            <>
                                <hr className="border-t my-6 w-full" />{" "}
                                <div className="flex flex-col items-center mt-4 gap-2">
                                    <p>How it looked like:</p>
                                    {visuals.map((visual, i) => (
                                        <Image
                                            src={visual.src}
                                            key={i}
                                            alt={visual.alt}
                                            width={visual.width}
                                            height={0}
                                            style={{ height: "auto" }}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </Modal>,
                    document.body // Render at root level
                )}
        </>
    );
}
