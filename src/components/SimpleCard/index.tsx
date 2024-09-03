import { cn } from "@/utils";
import Image from "next/image";
import { Hyperlink } from "../UI/HyperLink";

export type SimpleCardProps = {
  text: string;
  icon: string;
  link?: string;
  className?: string;
};

export default function SimpleCard({
  text,
  icon,
  link,
  className,
}: SimpleCardProps) {
  const card = (
    <div
      className={cn(
        "flex items-center justify-between h-16 min-w-64 bg-foreground rounded-lg px-6",
        className
      )}
    >
      <p>{text}</p>
      <Image src={icon} alt={text} width={28} height={28} />
    </div>
  );

  return link ? <Hyperlink href={link}>{card}</Hyperlink> : card;
}
