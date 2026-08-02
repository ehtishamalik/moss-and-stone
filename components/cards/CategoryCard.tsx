import { ArrowUpRight } from "lucide-react";
import { Animate } from "@/animation/fade-in";
import Media from "@/components/Media";
import { Link } from "@/components/ui/link";
import type { CategoryCard as CategoryCardProps } from "@/types";

export default function CategoryCard({
  title,
  description,
  image,
}: CategoryCardProps) {
  return (
    <Animate className="group relative w-full h-108 bg-card text-card-foreground">
      {image && <Media className="size-full" src={image} alt={title} />}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="p-5 bg-card text-card-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <p className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 mb-4 group-hover:max-h-40 group-hover:opacity-100">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <h3 className="mb-2.5">{title}</h3>
            <Link href="/contact" size="icon" variant="outline" showArrow>
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </Animate>
  );
}
