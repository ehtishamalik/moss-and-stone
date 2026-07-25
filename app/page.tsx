import CategoryGrid from "@/components/blocks/CategoryGrid";
import FeatureBannerCard from "@/components/blocks/FeatureBannerCard";
import FeaturedProductsGrid from "@/components/blocks/FeaturedProductsGrid";

export default function Home() {
  return (
    <>
      <FeatureBannerCard />
      <CategoryGrid />
      <FeaturedProductsGrid />
    </>
  );
}
