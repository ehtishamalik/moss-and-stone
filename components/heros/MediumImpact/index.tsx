import Video from "@/components/Video";

export default function MediumImpactHero() {
  return (
    <section className="pt-20">
      <div className="px-container">
        <div className="relative z-0 h-100">
          <Video
            src={"/images/videoplayback.mp4"}
            className="absolute inset-0 z-1"
          />
          <div className="absolute inset-0 z-1 bg-primary/50" />
          <div className="flex items-center justify-center text-primary-foreground h-full">
            <div className="relative z-2 max-w-md mx-auto">
              <h1 className="text-center">
                Every <em>Stitch</em> <br /> Made with <em>Purpose</em>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
