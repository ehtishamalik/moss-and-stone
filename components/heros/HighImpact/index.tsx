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
    <section className="md:pt-17 w-full overflow-hidden">
      <div className="mx-container">
        <div className="relative h-222 overflow-hidden">
          <div className="absolute top-0 left-0 z-10 pl-5 pt-20 md:pt-10 md:pl-10 max-w-md">
            <h2 className="mb-2.5">Premium Men's Tailoring</h2>
            <p className="mb-5">
              Expert tailoring for shalwar kameez, suits, sherwanis, and formal
              wear with precision, comfort, and timeless craftsmanship.
            </p>
            <Button variant="outline" showArrow>
              Book a Visit
            </Button>
          </div>
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
            spaceBetween={32}
            slidesPerView={1.8}
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
            breakpoints={{
              992: {
                slidesPerView: 3.8,
                spaceBetween: 48,
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <SwiperSlide key={item} className="flex! items-center">
                <PlaceholderMedia className="w-full h-100 md:h-140" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            key={activeIndex}
            className="absolute bottom-0 right-0 p-5 z-10 max-w-75 md:max-w-md hero-description"
          >
            <p className="mb-2.5">{HERO_SLIDES[activeIndex].description}</p>
            <div className="flex items-center justify-between gap-5">
              <div>
                <h3>{HERO_SLIDES[activeIndex].name}</h3>
                <h4>{HERO_SLIDES[activeIndex].price}</h4>
              </div>
              <Button variant="outline" size="icon" />
            </div>
          </div>
          <div className="md:flex hidden absolute bottom-8 left-8 z-10 justify-center gap-4">
            <Button
              type="button"
              variant="outline"
              size="icon"
              arrowTilt="left"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft />
            </Button>

            <Button
              type="button"
              variant="outline"
              size="icon"
              arrowTilt="right"
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
