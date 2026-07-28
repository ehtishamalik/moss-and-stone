import { CATEGORY_GRID } from "@/constants";
import CategoryCard from "../cards/CategoryCard";

export default function CategoryGrid() {
  return (
    <section>
      <div className="px-container">
        <div>
          <h2 className="mb-2.5">Our Services</h2>
          <p className="mb-5 md:mb-10 max-w-md">
            From everyday stitching to wedding wear, every garment is tailored
            with precision and attention to detail.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {CATEGORY_GRID.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              link={category.link}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
