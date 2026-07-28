import { PlaceholderMedia } from "../Media";
import { Link } from "../ui/link";

export default function NewsletterCTA() {
  return (
    <section>
      <div className="px-container">
        <div className="h-100 relative">
          <PlaceholderMedia className="absolute inset-0 z-0" />
          <div className="absolute inset-0 z-5 bg-primary/50"></div>
          <div className="relative z-10 h-full text-primary-foreground flex flex-col items-center justify-center text-center">
            <h2 className="mb-2.5">Ready for Your Perfect Fit?</h2>
            <p className="mb-5 max-w-md">
              Visit Baba Tailors today and experience premium tailoring designed
              around your measurements.
            </p>
            <Link
              href="https://maps.app.goo.gl/d8VtBuZLdomqUSSf9"
              variant="outline"
              showArrow
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
