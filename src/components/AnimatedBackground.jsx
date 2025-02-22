"use client";

import React from "react";
import { useTransition } from "@/context/TransitionContext";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const { isTransitioning } = useTransition();

  const baseStrokeWidth = {
    line: 1,
    vertical: 1.5,
    horizontal: 0.75,
  };

  const transitioningStrokeWidth = {
    line: 5,
    vertical: 7,
    horizontal: 9,
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      <motion.svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: isTransitioning ? 0.5 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        {/* Diagonal line with glow */}
        <motion.line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          strokeDasharray="10,15"
          className={`stroke-white ${
            isTransitioning ? "animate-dash-move-fast" : "animate-dash-move"
          }`}
          initial={{ strokeWidth: baseStrokeWidth.line }}
          animate={{
            strokeWidth: isTransitioning
              ? transitioningStrokeWidth.line
              : baseStrokeWidth.line,
          }}
          transition={{ duration: 0.3 }}
          style={{
            filter: "drop-shadow(0 0 2px #2F4F4F)",
          }}
        />

        {/* Vertical mystical line */}
        <motion.line
          x1="75%"
          y1="0"
          x2="75%"
          y2="100%"
          className={`stroke-white ${
            isTransitioning ? "animate-pulse-fast" : "animate-pulse-opacity"
          }`}
          initial={{ strokeWidth: baseStrokeWidth.vertical }}
          animate={{
            strokeWidth: isTransitioning
              ? transitioningStrokeWidth.vertical
              : baseStrokeWidth.vertical,
          }}
          transition={{ duration: 0.3 }}
          style={{
            filter: "drop-shadow(0 0 3px #2F4F4F)",
          }}
        />

        {/* Horizontal sigil line */}
        <motion.line
          x1="0"
          y1="30%"
          x2="100%"
          y2="30%"
          strokeDasharray="20,10"
          className={`stroke-white ${
            isTransitioning
              ? "animate-dash-reverse-fast"
              : "animate-dash-move-reverse"
          }`}
          initial={{ strokeWidth: baseStrokeWidth.horizontal }}
          animate={{
            strokeWidth: isTransitioning
              ? transitioningStrokeWidth.horizontal
              : baseStrokeWidth.horizontal,
          }}
          transition={{ duration: 0.3 }}
          style={{
            filter: "drop-shadow(0 0 2px #2F4F4F)",
          }}
        />
      </motion.svg>
    </div>
  );
}
