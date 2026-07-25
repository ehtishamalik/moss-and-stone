"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PlaceholderMedia } from "@/components/Media";
import "swiper/css";
import "./index.scss";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/button";
import { HERO_SLIDES } from "@/constants";

export default function HighImpactHero() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className="mx-container">
        <div className="relative h-[80svh] min-h-205 flex items-center overflow-hidden">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper: SwiperType) => {
              console.log("slide change", swiper.realIndex);
              setActiveIndex(swiper.realIndex);
            }}
            spaceBetween={48}
            slidesPerView={3.8}
            centeredSlides={true}
            loop={true}
            speed={500}
            className="size-full"
            watchSlidesProgress
            onProgress={(swiper) => {
              swiper.slides.forEach((slide) => {
                const progress = slide.progress;

                slide.style.setProperty(
                  "--progress",
                  Math.round(progress || 0).toString(),
                );
              });
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <SwiperSlide key={item} className="flex! items-center">
                <PlaceholderMedia className="w-full h-140" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            key={activeIndex}
            className="absolute bottom-8 right-8 z-10 max-w-xs pointer-events-none hero-description"
          >
            <h3>{HERO_SLIDES[activeIndex].name}</h3>
            <p>{HERO_SLIDES[activeIndex].description}</p>
          </div>
          <div className="absolute bottom-8 left-8 z-10 flex justify-center gap-4">
            <Button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft />
            </Button>

            <Button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
