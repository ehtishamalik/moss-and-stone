import { PlaceholderMedia } from "@/components/Media";
import { Button } from "../ui/button";

export default function FeatureBannerCard() {
  return (
    <section>
      <div className="mx-container">
        <div className="bg-primary text-primary-foreground rounded-none py-10 md:py-20 px-5">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10">
            <PlaceholderMedia className="hidden md:block" />
            <div className="md:px-5 my-auto">
              <h1 className="mb-5">
                Soft as <em>Moss</em> <br /> Durable as <em>Stone</em>
              </h1>
              <p className="mb-10">
                We reject the temporary. In a world of fast trends, we choose
                the slow path. Moss & Stone is built on a foundation of
                earth-toned essentials, crafted from organic fibers designed to
                weather the seasons with you. Quiet luxury isn't about the price
                tag—it's about the feeling of wearing something real.
              </p>

              <Button>Read Story</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
