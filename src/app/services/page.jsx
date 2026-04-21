import Cta from "@/components/Cta";
import CtaButton from "@/components/CtaButton";
import { Check, Clock, FileCheck, Pen, RefreshCcw } from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
  const whyUs = [
    {
      icon: Clock,
      title: "Fast 2–6 Hour Turnaround",
      description: "Rush delivery when you need it most.",
    },
    {
      icon: RefreshCcw,
      title: "Unlimited Revisions",
      description: "We refine until you're 100% satisfied.",
    },
    {
      icon: FileCheck,
      title: "Machine-Ready Files",
      description: "Files optimized for all major embroidery machines.",
    },
    {
      icon: Pen,
      title: "Expert Manual Digitizing",
      description: "Every design is hand-digitized by professionals.",
    },
  ];
  return (
    <div className="mt-20">
      {" "}
      {/* Hero */}
      <section className="bg-white-background flex flex-col lg:flex-row justify-center items-center py-10">
        {/* Content */}
        <div className="w-full lg:w-1/2 ml-10 flex flex-col gap-4">
          <h1 className="font-heading text-5xl font-bold text-primary">
            Professional Digitizing & Vector Art Services
          </h1>
          <p className="font-medium text-lg text-secondary">
            High-quality embroidery digitizing solutions for brands, embroidery
            shops, apparel companies, and custom merchandise businesses.
          </p>
          <p className="font-body text-lg text-primary/80">
            We provide expert embroidery digitizing, vector art conversion, 3D
            puff digitizing, cap digitizing, jacket back designs, and custom
            patch services with fast turnaround and premium stitch quality.
          </p>
          <div className="flex gap-4 font-body my-5">
            <CtaButton className="mt-5">Get A Free Quote</CtaButton>

            <button className="bg-white  text-primary w-fit mt-5 px-6 py-3 font-body rounded-xl transition-all duration-150 cursor-pointer shadow-sm hover:scale-105 hover:bg-primary/90 hover:text-white border-primary  border-2">
              Order Now
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-2 ">
          <Image
            src="/hero/service-hero.jpg"
            alt="Hero"
            width={500}
            height={250}
            className="shadow-2xl rounded-2xl"
          />
        </div>
      </section>
      {/* Embroidery Digitizing Services */}
      <section className="bg-gray-background grid grid-cols-1 lg:grid-cols-2 px-10 py-20 gap-x-10 items-center">
        <div>
          <Image
            src="/services/EmbDigitizing.png"
            width={650}
            height={650}
            alt="embroidery-digitizing"
            className="rounded-2xl shadow-xl mb-5 lg:mb-0"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="main-heading">Embroidery Digitizing Services</h1>
          <p className="text-primary/80 text-base leading-relaxed font-body mt-4">
            Convert your logo, artwork, or custom design into machine-ready
            embroidery files with precise stitch paths and smooth thread flow.
          </p>
          {/* Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
            {/* col 1 */}
            <div className="flex flex-col gap-2 text-primary/80">
              {[
                "Left chest logo digitizing",
                "Polo shirt embroidery files",
                "High stitch accuracy",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-secondary" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            {/* col 2 */}
            <div className="flex flex-col gap-2 text-primary/80 mt-2 lg:mt-0">
              {[
                "Uniform logo digitizing",
                "Corporate branding logos",
                "Fast file delivery",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 ">
                  <Check className="text-secondary" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Supported Format */}
          <div className="flex gap-2 text-primary/80 items-center text-sm my-2 lg:my-0">
            <h2 className=" font-semibold">Supported Formats</h2>
            <p>DST, PES, EXP, EMB, JEF, VP3</p>
          </div>
          <CtaButton>Request This Service</CtaButton>
        </div>
      </section>
      {/* Cap & Hat Digitizing Services */}
      <section className="bg-white-background grid grid-cols-1 lg:grid-cols-2 px-10 py-20 gap-x-10 items-center">
        <div className="flex flex-col">
          <h1 className="main-heading">Cap & Hat Digitizing</h1>
          <p className="text-primary/80 text-base leading-relaxed font-body mt-4">
            Specialized digitizing for caps, snapbacks, and hats with optimized
            stitch direction and curved surface accuracy.
          </p>
          {/* Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
            {/* col 1 */}
            <div className="flex flex-col gap-2 text-primary/80">
              {[
                "6-panel cap digitizing",
                "Front and side embroidery",
                "Curved surface stitch control",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-secondary" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            {/* col 2 */}
            <div className="flex flex-col gap-2 text-primary/80 mt-2 lg:mt-0">
              {["Snapback logo designs", "Structured cap optimization"].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="text-secondary" size={18} />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
          <CtaButton>Request This Service</CtaButton>
        </div>
        <div>
          <Image
            src="/services/CapService.jpg"
            width={650}
            height={650}
            alt="cap-hat-digitizing"
            className="rounded-2xl shadow-xl mt-5 lg:mt-0 "
          />
        </div>
      </section>
      {/* 3D Puff Embroidery Digitizing */}
      <section className="bg-gray-background grid grid-cols-1 lg:grid-cols-2 px-10 py-20 gap-x-10 items-center">
        <div>
          <Image
            src="/services/PuffEmbDigitizing.png"
            width={650}
            height={650}
            alt="puff-embroidery-digitizing"
            className="rounded-2xl shadow-xl mb-2 lg:mb-0"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="main-heading">3D Puff Embroidery Digitizing</h1>
          <p className="text-primary/80 text-base leading-relaxed font-body mt-4">
            Premium raised embroidery designs for caps, hoodies, jackets, and
            sportswear.
          </p>
          {/* Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
            {/* col 1 */}
            <div className="flex flex-col gap-2 text-primary/80">
              {[
                "Raised logo effect",
                "Bold lettering",
                "Cap puff embroidery",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-secondary" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            {/* col 2 */}
            <div className="flex flex-col gap-2 text-primary/80 mt-2 lg:mt-0">
              {["Foam-ready stitch path", "Sportswear branding"].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="text-secondary" size={18} />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
          <CtaButton>Order 3d Puff Design</CtaButton>
        </div>
      </section>
      {/* Jacket Back & Large Design Digitizing  */}
      <section className="bg-white-background grid grid-cols-1 lg:grid-cols-2 px-10 py-20 gap-x-10 items-center">
        {/* Content */}
        <div className="flex flex-col">
          <h1 className="main-heading">
            Jacket Back & Large Design Digitizing
          </h1>
          <p className="text-primary/80 text-base leading-relaxed font-body mt-4">
            We specialize in complex large embroidery designs with optimized
            stitch density and sequencing.
          </p>
          {/* Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
            {/* col 1 */}
            <div className="flex flex-col gap-2 text-primary/80">
              {["Large design optimization", "Smooth fill areas"].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="text-secondary" size={18} />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
            {/* col 2 */}
            <div className="flex flex-col gap-2 text-primary/80 mt-2 lg:mt-0">
              {["Reduced stitch pull", "High detail artwork"].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="text-secondary" size={18} />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
          <CtaButton className="mb-2 lg:mb-0">
            Get A Jacket Design Quote
          </CtaButton>
        </div>
        {/* Image */}
        <div>
          <Image
            src="/services/JacketDesign.jpg"
            width={650}
            height={650}
            alt="jacket-back-digitizing"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>
      {/* Vector Art & Logo Conversion */}
      <section className="bg-gray-background grid grid-cols-1 lg:grid-cols-2 px-10 py-20 gap-x-10 items-center">
        <div>
          <Image
            src="/services/VectorArt.jpg"
            width={650}
            height={650}
            alt="vector-art"
            className="rounded-2xl shadow-xl mb-2 lg:mb-0"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="main-heading">Vector Art & Logo Conversion</h1>
          <p className="text-primary/80 text-base leading-relaxed font-body mt-4">
            Convert low-resolution logos into clean, scalable vector artwork for
            print and embroidery.
          </p>
          {/* Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
            {/* col 1 */}
            <div className="flex flex-col gap-2 text-primary/80">
              {["JPG to vector", "PDF recreation", "Print-ready output"].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="text-secondary" size={18} />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
            {/* col 2 */}
            <div className="flex flex-col gap-2 text-primary/80 mt-2 lg:mt-0">
              {["PNG to AI", "Scalable files"].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-secondary" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Supported Format */}
          <div className="flex gap-2 text-primary/80 items-center text-sm my-2 lg:my-0">
            <h2 className=" font-semibold">Supported Formats</h2>
            <p>AI, EPS, SVG, PDF, PNG</p>
          </div>
          <CtaButton>Convert My Logo</CtaButton>
        </div>
      </section>
      {/* Custom Embroidery Patch Design */}
      <section className="bg-white-background grid grid-cols-1 lg:grid-cols-2 px-10 py-20 gap-x-10 items-center">
        {/* Content */}
        <div className="flex flex-col">
          <h1 className="main-heading">Custom Embroidery Patch Design</h1>
          <p className="text-primary/80 text-base leading-relaxed font-body mt-4">
            Create premium custom patches for uniforms, brands, schools, and
            merchandise.
          </p>
          {/* Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
            {/* col 1 */}
            <div className="flex flex-col gap-2 text-primary/80">
              {["Logo patches", "School badges", "Bulk patch production"].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="text-secondary" size={18} />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
            {/* col 2 */}
            <div className="flex flex-col gap-2 text-primary/80 mt-2 lg:mt-0">
              {["Uniform patches", "Custom branding"].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-secondary" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <CtaButton className="mb-2 lg:mb-0">Request Patch Design</CtaButton>
        </div>
        {/* Image */}
        <div>
          <Image
            src="/services/CustomEmb.jpg"
            width={650}
            height={650}
            alt="jacket-back-digitizing"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="bg-gray-background flex flex-col items-center py-20">
        <h1 className="main-heading">Why Choose Our Services</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-10 mt-10">
          {whyUs.map((why, index) => {
            const Icon = why.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <span className="bg-secondary/20 flex items-center justify-center p-3 rounded-2xl mb-4">
                  <Icon size={32} className="text-secondary " />
                </span>
                <h2 className="text-xl font-heading font-semibold text-primary">
                  {why.title}
                </h2>
                <p className="text-primary/50 font-body mt-2 text-sm">
                  {why.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Cta */}
      <Cta
        heading="Need Professional Digitizing for Your Next Project?"
        text="Send us your design and get a high-quality embroidery-ready file delivered fast."
        button="Get a Quote"
      />
    </div>
  );
}

export default page;
