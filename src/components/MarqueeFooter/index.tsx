import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import HashLink from "../UI/HashLink";

type Props = {
  hasChevron: boolean;
};

export default function MarqueeFooter({ hasChevron }: Props) {
  return (
    <div className="w-full h-14 flex items-center justify-center bg-foreground py-4">
      {hasChevron && (
        <div className="absolute bottom-0 flex items-center justify-center bg-foreground px-4 pb-2.5 h-12 z-10 transition-transform duration-300 ease-in-out group hover:translate-y-[-4px]">
          <HashLink href="#work" className="flex items-center gap-2">
            <Image
              src="/ChevronDown.svg"
              alt="Chevron down"
              width={18}
              height={10}
            />
          </HashLink>
        </div>
      )}

      <Marquee gradient={false} speed={50} direction="right" autoFill={true}>
        <div className="relative w-[86px] h-[26px]">
          <Image
            src="/IndividualMarquee.svg"
            alt="Marquee"
            width={86}
            height={26}
          />
        </div>
      </Marquee>
    </div>
  );
}
