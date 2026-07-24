import type { ImageProps } from "next/image";
import Image from "next/image";
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
    <picture className={className}>
      <Image className={imgClassName} {...props} />
    </picture>
  );
}

export function PlaceholderMedia() {
  return (
    <Media
      src={Placeholder}
      alt="placeholder image"
      imgClassName="object-cover size-full"
    />
  );
}
