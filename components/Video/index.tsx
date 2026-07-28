import { cn } from "@/lib/utils";

type MediaProps = React.ComponentProps<"video"> & {
  imgClassName?: string;
};

export default function Video({
  className,
  imgClassName,
  ...props
}: MediaProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <video
        autoPlay
        muted
        loop
        className={cn("object-cover size-full", imgClassName)}
        {...props}
      >
        <source src={(props as { src: string }).src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
