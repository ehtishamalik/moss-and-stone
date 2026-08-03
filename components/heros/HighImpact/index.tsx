"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Media from "@/components/Media";
import "swiper/css";
import "./index.scss";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { HERO_SLIDES } from "@/constants";

export default function HighImpactHero() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <section className="md:pt-17 w-full overflow-hidden">
        <div className="mx-container">
          <div className="relative h-275 md:h-222 overflow-hidden">
            <div className="absolute top-0 left-0 z-10 px-5 pt-20 md:pt-10 md:pl-10 max-w-md">
              <h2 className="mb-2.5">Premium Men's Tailoring</h2>
              <p className="mb-5">
                Expert tailoring for shalwar kameez, suits, sherwanis, and
                formal wear with precision, comfort, and timeless craftsmanship.
              </p>
              <Link
                href="https://wa.me/+923005356545"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                showArrow
              >
                Book a Visit
              </Link>
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
                setActiveIndex(swiper.realIndex);
              }}
              spaceBetween={28}
              slidesPerView={1.4}
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
                768: {
                  slidesPerView: 2.4,
                  spaceBetween: 48,
                },
                992: {
                  slidesPerView: 3.8,
                  spaceBetween: 48,
                },
              }}
            >
              {HERO_SLIDES.map((item, index) => (
                <SwiperSlide
                  key={`${item.name}-${index}`}
                  className="flex! items-center"
                >
                  <Media
                    src={item.image}
                    alt={item.name}
                    className="w-full h-140"
                    {...(index === 0 && { priority: true, loading: "eager" })}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              key={activeIndex}
              className="absolute bottom-10 md:bottom-0 right-0 p-5 z-10 max-w-75 md:max-w-md hero-description"
            >
              <p className="mb-2.5">{HERO_SLIDES[activeIndex].description}</p>
              <div className="flex items-center justify-between gap-5">
                <div>
                  <h3>{HERO_SLIDES[activeIndex].name}</h3>
                  <h4>{HERO_SLIDES[activeIndex].price}</h4>
                </div>
                <Link variant="outline" size="icon" href="/contact" />
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
    </>
  );
}
