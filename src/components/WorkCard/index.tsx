"use client";

import { Button } from "@/components/UI/Button";
import { Work } from "@/sections/Work";
import { cn } from "@/utils";
import Image from "next/image";

export default function WorkCard({ contents, logo, direction }: Work) {
  return (
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
          <Button
            size="md"
            color={contents.buttons.websiteButtonColor}
            border="none"
          >
            <a
              href={contents.buttons.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </Button>
          <Button size="md" color="none" border="md">
            <a
              href={contents.buttons.moreLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              More
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
