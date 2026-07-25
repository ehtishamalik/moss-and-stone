import { CATEGORY_GRID } from "@/constants";
import CategoryCard from "../cards/CategoryCard";

export default function CategoryGrid() {
  return (
    <section className="section-padding">
      <div className="px-container">
        <div>
          <h2 className="mb-2.5">SHOP BY CATEGORY</h2>
          <p className="mb-10">
            Explore our curated collections of earth-toned essentials made for
            daily living.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
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
