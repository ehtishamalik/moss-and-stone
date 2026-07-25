import type { TestimonialCard as TestimonialCardProps } from "@/types";
import { PlaceholderMedia } from "../Media";

export default function TestimonialCard({
  testimonial,
  name,
}: TestimonialCardProps) {
  return (
    <div className="p-10 bg-card text-card-foreground">
      <div className="flex flex-row gap-10">
        <div className="flex-1">
          <h2 className="mb-10">"{testimonial}"</h2>
          <h4 className="">{name}</h4>
        </div>
        <PlaceholderMedia className="h-108 max-w-xs border-primary border-8" />
      </div>
    </div>
  );
}
