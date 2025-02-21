"use client";

import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <svg
        className="w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Diagonal line with glow */}
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          className="stroke-white animate-dash-move"
          strokeWidth="1"
          strokeDasharray="10,15"
          style={{
            filter: "drop-shadow(0 0 2px #2F4F4F)",
          }}
        />

        {/* Vertical mystical line */}
        <line
          x1="75%"
          y1="0"
          x2="75%"
          y2="100%"
          className="stroke-white animate-pulse-opacity"
          strokeWidth="1.5"
          style={{
            filter: "drop-shadow(0 0 3px #2F4F4F)",
          }}
        />

        {/* Horizontal sigil line */}
        <line
          x1="0"
          y1="30%"
          x2="100%"
          y2="30%"
          className="stroke-white animate-dash-move-reverse"
          strokeWidth="0.75"
          strokeDasharray="20,10"
          style={{
            filter: "drop-shadow(0 0 2px #2F4F4F)",
          }}
        />
      </svg>
    </div>
  );
}
