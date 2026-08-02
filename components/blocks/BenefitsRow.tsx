import { Animate } from "@/animation/fade-in";
import { BENEFITS } from "@/constants";
import BenefitsCard from "../cards/BenefitsCard";

export default function BenefitsRow() {
  return (
    <section>
      <div className="px-container">
        <Animate as="h2" className="mb-2.5">
          Why Baba Tailors
        </Animate>
        <Animate as="p" className="mb-5 md:mb-10 max-w-md">
          Trusted by customers across Gujranwala for quality stitching, perfect
          fitting, and dependable service.
        </Animate>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {BENEFITS.map((benefit, index) => (
            <BenefitsCard
              key={index}
              title={benefit.title}
              descriptionStrong={benefit.descriptionStrong}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
