import type { ImageProps } from "next/image";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Placeholder from "@/public/placeholder.png";

type MediaProps = ImageProps & {
  imgClassName?: string;
};

export default function Media({
  className,
  imgClassName,
  ...props
}: MediaProps) {
  return (
    <picture className={cn("relative block overflow-hidden", className)}>
      <Image
        className={cn("object-cover size-full", imgClassName)}
        fill
        {...props}
      />
    </picture>
  );
}

export function PlaceholderMedia({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) {
  return (
    <Media
      src={Placeholder}
      alt="placeholder image"
      imgClassName={cn("object-cover size-full", imgClassName)}
      className={className}
    />
  );
}
