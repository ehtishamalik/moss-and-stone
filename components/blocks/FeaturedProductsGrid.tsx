import { Animate } from "@/animation/fade-in";
import ProductCard from "@/components/cards/ProductCard";
import { PRODUCT_GRID } from "@/constants";

export default function FeaturedProductsGrid() {
  return (
    <section>
      <div className="px-container">
        <div>
          <Animate as="h2" className="mb-2.5">
            Tailoring for Every Occasion
          </Animate>
          <Animate as="p" className="mb-5 md:mb-10 max-w-md">
            From everyday essentials to wedding attire, our custom tailoring
            ensures comfort, confidence, and timeless style.
          </Animate>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2.5">
          {PRODUCT_GRID.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              price={product.price}
              image={product.image}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
