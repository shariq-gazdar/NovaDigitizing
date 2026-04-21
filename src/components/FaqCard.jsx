"use client";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

export default function FaqCard({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-primary/20 rounded-xl overflow-hidden transition-all duration-300">
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-primary"
      >
        <span>{question}</span>
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <ArrowUp size={14} />
        </span>
      </button>

      {/* Answer */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-4 text-sm text-primary/80">{answer}</p>
        </div>
      </div>
    </div>
  );
}
