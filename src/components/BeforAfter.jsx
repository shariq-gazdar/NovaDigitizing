"use client";
import { useState } from "react";

export default function BeforeAfter({ before, after }) {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Images */}
      <div className="relative w-full h-64 overflow-hidden rounded-xl">
        {/* AFTER (background) */}
        <img
          src={after}
          alt="after"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* BEFORE (overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt="before"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white"
          style={{ left: `${position}%` }}
        />

        {/* Slider Handle */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />

        {/* Handle Circle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border shadow"
          style={{ left: `calc(${position}% - 12px)` }}
        />
      </div>
    </div>
  );
}
