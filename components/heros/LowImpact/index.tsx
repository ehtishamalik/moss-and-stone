import { Animate } from "@/animation/fade-in";

export default function LowImpactHero() {
  return (
    <section className="pt-20">
      <div className="px-container">
        <div className="space-y-2.5 pt-10">
          <Animate as="h1">GET IN TOUCH</Animate>
          <Animate as="p" className="max-w-sm">
            For fit advice, order support, or just to connect—we’re here to
            listen.
          </Animate>
        </div>
      </div>
    </section>
  );
}
