"use client"

import { Button } from "@/components/UI/Button";
import { Work } from "@/sections/Work";
import { cn } from "@/utils";
import Image from "next/image";
import { Hyperlink } from "../UI/HyperLink";
import { Modal } from "../UI/Modal";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function WorkCard({ contents, logo, direction }: Work) {
  const [isOpen, setIsOpen] = useState(false)

  const websiteButton = (
    <Button
      size="md"
      color={contents.buttons.websiteButtonColor}
      border="none"
      className={cn(
        contents.buttons.websiteButtonColor === "solanaMirror" &&
        "text-foreground"
      )}
      onClick={!contents.buttons.websiteLink ? () => setIsOpen(true) : undefined}
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
            src={logo}
            alt={`${contents.title} Logo`}
            width={108}
            height={108}
          />
        </div>
        <div
          className={cn(
            "flex flex-col px-4 gap-4",
            direction === "right" ? "items-end text-end" : "items-start"
          )}
        >
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold">{contents.title}</p>
            <p className="font-medium">{contents.description}</p>
          </div>
          <div className="flex gap-3">
            {contents.buttons.websiteLink ?
              <Hyperlink href={contents.buttons.websiteLink}>
                {websiteButton}
              </Hyperlink>
              :
              websiteButton
            }
            <Hyperlink href={contents.buttons.moreLink}>
              <Button size="md" color="none" border="md">
                More
              </Button>
            </Hyperlink>
          </div>
        </div>
      </div>

      {isOpen &&
        createPortal(
          <Modal onClose={() => setIsOpen(false)} className="z-50 mx-4 sm:mx-12">
            <div className="flex flex-col gap-2 items-center">
              <p className="font-bold text-center">No website available for {contents.title}.</p>
              <p className="text-center">Want to see what’s under the hood? Explore the project details
              </p>
              <Hyperlink
                href={contents.buttons.moreLink}
                className="border-b hover:text-link-hover-blue hover:border-link-hover-blue"
              >
                here
              </Hyperlink>

            </div>
          </Modal>,
          document.body // Render at root level
        )}
    </>
  );
}
