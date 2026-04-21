import React from "react";

function CtaButton({ children, className }) {
  return (
    <button
      className={`bg-cta text-white w-fit px-6 py-3 font-body rounded-xl transition-all duration-150 cursor-pointer shadow-sm hover:scale-105 hover:bg-cta/90 hover:text-white border-cta border-2 ${className}`}
    >
      {children}
    </button>
  );
}

export default CtaButton;
