import { Animate } from "@/animation/fade-in";
import type { ProductCard as ProductCardProps } from "@/types";
import Media from "../Media";

export default function ProductCard({ title, image, price }: ProductCardProps) {
  return (
    <Animate className="bg-card text-card-foreground p-2.5">
      {image && <Media className="h-100" src={image} alt={title} />}
      <div className="flex gap-4 items-center justify-between pt-2.5">
        <p>{title}</p>
        <p className="font-semibold!">{price}</p>
      </div>
    </Animate>
  );
}
