import { Button } from "@/components/UI/Button";
import { Work } from "@/sections/Work";
import { cn } from "@/utils";
import Image from "next/image";
import { Hyperlink } from "../UI/HyperLink";

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
          {/* TODO: refactor, open Modal if no website link */}
          {contents.buttons.websiteLink ?
            <Hyperlink href={contents.buttons.websiteLink}>
              <Button
                size="md"
                color={contents.buttons.websiteButtonColor}
                border="none"
                className={cn(
                  contents.buttons.websiteButtonColor === "solanaMirror" &&
                  "text-foreground"
                )}
              >
                Website
              </Button>
            </Hyperlink>
            : <Button
              size="md"
              color={contents.buttons.websiteButtonColor}
              border="none"
              className={cn(
                contents.buttons.websiteButtonColor === "solanaMirror" &&
                "text-foreground"
              )}
            >
              Website
            </Button>
          }
          <Hyperlink href={contents.buttons.moreLink}>
            <Button size="md" color="none" border="md">
              More
            </Button>
          </Hyperlink>
        </div>
      </div>
    </div>
  );
}
