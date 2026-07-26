import { PRODUCT_GRID } from "@/constants";
import ProductCard from "../cards/ProductCard";

export default function FeaturedProductsGrid() {
  return (
    <section>
      <div className="px-container">
        <div>
          <h2 className="mb-2.5">BESTSELLERS</h2>
          <p className="mb-5 md:mb-10 max-w-md">
            Shop the crowd favorites. These are the most-loved styles our
            community adores.
          </p>
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
