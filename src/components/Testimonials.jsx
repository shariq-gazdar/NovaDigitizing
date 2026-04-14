"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      review:
        "The stitch quality was outstanding and delivery was incredibly fast. Our embroidery production has never been smoother!",
      name: "Sarah Mitchell",
      position: "Owner, Premier Stitchworks",
      stars: 5,
    },
    {
      review:
        "Best digitizing company we have worked with. Accurate, reliable, and they truly understand embroidery.",
      name: "James Cooper",
      position: "Production Manager, ThreadCraft Co.",
      stars: 5,
    },
  ];

  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const hasHalf = stars % 1 !== 0;

    return (
      <div className="flex gap-x-1">
        {/* Full Stars */}
        {Array.from({ length: fullStars }, (_, i) => (
          <Star key={`full-${i}`} className="text-cta" fill="#f97316" />
        ))}

        {/* Half Star */}
        {hasHalf && <StarHalf key="half" className="text-cta" fill="#f97316" />}
      </div>
    );
  };

  return (
    <section className="py-20 bg-white-background flex flex-col ">
      <h1 className="main-heading text-center mb-10">
        Trusted by Embroidery Businesses Worldwide
      </h1>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          loop={true}
          className="max-w-[80%] flex items-stretch"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-auto mb-10 mr-2">
              <div className="flex flex-col h-full justify-between  shadow-sm bg-white p-5 rounded-xl relative">
                <div className="flex flex-col gap-y-2">
                  <span>{renderStars(testimonial.stars)}</span>
                  <p className="text-primary/50 italic m-2">
                    "{testimonial.review}"
                  </p>
                </div>

                <div>
                  <p className="text-primary font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-black text-sm">{testimonial.position}</p>
                </div>

                <span className="text-9xl absolute top-5 right-5">
                  <Quote className="text-secondary/50" size={40} />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
