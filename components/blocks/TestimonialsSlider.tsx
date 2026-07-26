"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { TESTIMONIALS } from "@/constants";
import TestimonialCard from "../cards/TestimonialCard";
import "swiper/css";

export default function TestimonialsSlider() {
  return (
    <section>
      <div className="px-container">
        <h2 className="mb-2.5">PROVEN QUALITY</h2>
        <p className="mb-10 max-w-md">
          Hear from our community. Real experiences with the craftsmanship and
          quality of our everyday essentials
        </p>
        <div>
          <Swiper spaceBetween={0} slidesPerView={1}>
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
