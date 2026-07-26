import { PlaceholderMedia } from "@/components/Media";
import { cn } from "@/lib/utils";

export default function FeatureBannerCard({
  children,
  fullWidth = false,
  variant = "default",
  imagePosition = "left",
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?: "default" | "card";
  imagePosition?: "left" | "right";
}) {
  return (
    <section>
      <div
        className={cn(
          fullWidth && "mx-container",
          !fullWidth && "px-container",
        )}
      >
        <div
          className={cn("py-10 md:py-20 px-5", {
            "bg-primary text-primary-foreground": variant === "default",
            "bg-card text-card-foreground": variant === "card",
          })}
        >
          <div
            className={cn("grid grid-cols-1 gap-10", {
              "md:grid-cols-[1.5fr_1fr]": imagePosition === "left",
              "md:grid-cols-[1fr_1.5fr]": imagePosition === "right",
            })}
          >
            {imagePosition === "left" && (
              <PlaceholderMedia className="hidden md:block" />
            )}
            <div className="md:px-5 my-auto">{children}</div>
            {imagePosition === "right" && (
              <PlaceholderMedia className="hidden md:block" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
