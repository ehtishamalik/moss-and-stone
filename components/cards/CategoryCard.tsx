import { ArrowUpRight } from "lucide-react";
import type { CategoryCard as CategoryCardProps } from "@/types";
import { PlaceholderMedia } from "../Media";
import { Button } from "../ui/button";

export default function CategoryCard({
  title,
  description,
  image,
}: CategoryCardProps) {
  return (
    <div className="group relative w-full h-108 bg-card text-card-foreground">
      {image && <PlaceholderMedia className="size-full" />}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="p-5 bg-card text-card-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <p className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 mb-4 group-hover:max-h-40 group-hover:opacity-100">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <h3 className="mb-2.5">{title}</h3>
            <Button size="icon" variant="outline" showArrow>
              <ArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
