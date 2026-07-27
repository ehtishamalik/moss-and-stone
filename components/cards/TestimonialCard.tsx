import type { TestimonialCard as TestimonialCardProps } from "@/types";
import { PlaceholderMedia } from "../Media";

export default function TestimonialCard({
  testimonial,
  name,
}: TestimonialCardProps) {
  return (
    <div className="p-5 md:p-10 h-full bg-card text-card-foreground">
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="flex-1">
          <h2 className="mb-10">"{testimonial}"</h2>
          <h4 className="">{name}</h4>
        </div>
        <PlaceholderMedia className="h-100 max-w-xs border-4" />
      </div>
    </div>
  );
}
