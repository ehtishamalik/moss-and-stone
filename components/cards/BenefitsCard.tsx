import type { BenefitsCard as BenefitsCardProps } from "@/types";

export default function BenefitsCard({
  title,
  descriptionStrong,
  description,
}: BenefitsCardProps) {
  return (
    <div className="bg-card text-card-foreground p-10">
      <h3 className="mb-5">{title}</h3>
      <p>
        <strong>{descriptionStrong}</strong> {description}
      </p>
    </div>
  );
}
