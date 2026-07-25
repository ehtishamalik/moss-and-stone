import { PlaceholderMedia } from "../Media";

export default function NewsletterCTA() {
  return (
    <section>
      <div className="px-container">
        <div className="h-100 relative">
          <PlaceholderMedia className="absolute inset-0 z-0" />
          <div className="absolute inset-0 z-5 bg-primary/50"></div>
          <div className="relative z-10 h-full text-primary-foreground flex items-center justify-center">
            <h2>Built for the Journey</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
