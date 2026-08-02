"use client";

import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Animate } from "@/animation/fade-in";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { TESTIMONIALS } from "@/constants";
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";

export default function TestimonialsSlider() {
  return (
    <section>
      <div className="px-container">
        <Animate as="h2" className="mb-2.5">
          PROVEN QUALITY
        </Animate>
        <Animate as="p" className="mb-10 max-w-md">
          Hear from our community. Real experiences with the craftsmanship and
          quality of our everyday essentials
        </Animate>
        <div>
          <Swiper
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            modules={[Pagination, A11y, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto!">
                <TestimonialCard
                  testimonial={testimonial.testimonial}
                  name={testimonial.name}
                  image={testimonial.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
