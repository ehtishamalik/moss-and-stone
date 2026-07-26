import type { ProductCard as ProductCardProps } from "@/types";
import { PlaceholderMedia } from "../Media";

export default function ProductCard({ title, image, price }: ProductCardProps) {
  return (
    <div className="bg-card text-card-foreground p-2.5">
      {image && <PlaceholderMedia className="h-100" />}
      <div className="flex gap-4 items-center justify-between pt-2.5">
        <p>{title}</p>
        <p className="font-semibold!">{price}</p>
      </div>
    </div>
  );
}
