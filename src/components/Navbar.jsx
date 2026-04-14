import Image from "next/image";
import React from "react";

function Navbar() {
  const pages = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];
  return (
    <nav className="flex justify-between items-center px-8 py-5 shadow-sm fixed w-full bg-white z-90">
      {/* Logo */}
      <div>
        <Image
          src="/logo-transparent.png"
          width={150}
          height={150}
          alt="logo"
          className=""
        />
      </div>
      {/* Pages */}
      <div>
        <ul className="flex gap-10">
          {pages.map((page) => (
            <li
              key={page.name}
              className="text-sm font-medium text-primary/80 hover:text-secondary transition-colors duration-200"
            >
              <a href={page.href}>{page.name}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* CTA */}
      <div>
        <button className="bg-cta text-white px-6 py-3 rounded-lg font-extralight shadow-sm">
          Get a Quote
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
