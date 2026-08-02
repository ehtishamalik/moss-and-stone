import type { ImageProps } from "next/image";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
