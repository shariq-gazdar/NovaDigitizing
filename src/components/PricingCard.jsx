import React from "react";
import CtaButton from "./CtaButton";
import { Check, Sparkle } from "lucide-react";

function PricingCard({
  title = "title",
  subtitle = "subtitle",
  features = [
    "Up to 5,000 stitches",
    "Left chest logo",
    "1 file format",
    "Delivery in 6–8 hours",
    "1 revision",
  ],
  price = 0,
  popular = true,
}) {
  return (
    <div
      className={`w-full relative flex flex-col items-start  bg-white p-8 rounded-2xl shadow-xl hover:translate-y-[-5px] transition-all duration-300 ${popular ? "border border-secondary m" : "my-2"}`}
    >
      {/* Title */}
      <h3
        className={`font-heading font-bold text-2xl capitalize ${popular ? "text-secondary" : "text-primary"}`}
      >
        {title}
      </h3>
      {/* Subtitle */}
      <p className="text-primary/80">{subtitle}</p>
      {/* Price */}
      <h2 className="text-5xl text-primary font-black font-heading my-4">
        ${price}
        <span className="text-sm text-primary/80 font-normal ">/design</span>
      </h2>
      {/* Features */}
      <div className="flex flex-col gap-y-5 my-5">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 ">
            <span
              className={`rounded-full p-1 ${popular ? "bg-secondary/10" : "bg-primary/10"}`}
            >
              <Check
                size={18}
                className={`${popular ? "text-secondary" : "text-primary"}`}
              />
            </span>
            <p className="text-primary/80 capitalize">{feature}</p>
          </div>
        ))}
      </div>
      {/* Button */}
      {popular ? (
        <CtaButton className="mt-5 capitalize w-full">Choose {title}</CtaButton>
      ) : (
        <button className="bg-white  text-primary w-full mt-5 px-6 py-3 font-body rounded-xl transition-all duration-150 cursor-pointer shadow-sm hover:scale-105 hover:bg-primary/90 hover:text-white border-primary  border-2 capitalize">
          Choose {title}
        </button>
      )}
      {/* Most Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cta text-white px-4 py-1 rounded-full text-sm font-bold flex items-center  gap-x-2 ">
          <Sparkle size={16} />
          Most Popular
        </div>
      )}
    </div>
  );
}

export default PricingCard;
