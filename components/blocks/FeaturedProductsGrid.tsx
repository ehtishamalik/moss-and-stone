import { PRODUCT_GRID } from "@/constants";
import ProductCard from "../cards/ProductCard";

export default function FeaturedProductsGrid() {
  return (
    <section className="section-padding">
      <div className="px-container">
        <div>
          <h2 className="mb-2.5">BESTSELLERS</h2>
          <p className="mb-10">
            Shop the crowd favorites. These are the most-loved styles our
            community adores.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
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
