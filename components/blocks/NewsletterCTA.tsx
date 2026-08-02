import { Animate } from "@/animation/fade-in";
import { Link } from "@/components/ui/link";
import Video from "@/components/Video";

export default function NewsletterCTA() {
  return (
    <Animate as="section">
      <div className="px-container">
        <div className="h-100 relative">
          <Video
            className="absolute inset-0 z-0"
            src={"/images/videoplayback.mp4"}
          />
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
    </Animate>
  );
}
