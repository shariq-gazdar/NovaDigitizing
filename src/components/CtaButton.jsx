import React from "react";

function CtaButton({ children }) {
  return (
    <button className="bg-cta text-white w-fit px-6 py-3 font-body rounded-xl shadow-sm hover:scale-105 hover:bg-cta/90 transition-all duration-300">
      {children}
    </button>
  );
}

export default CtaButton;
