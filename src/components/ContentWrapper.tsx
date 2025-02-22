"use client";

import { motion } from "framer-motion";

export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-screen">
      <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto px-8 md:px-24">
        <motion.div
          className="relative border border-fern_green-500/20 rounded-lg backdrop-blur-sm bg-black/20 content-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Card Header - Always Visible */}
          <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fern_green-500/50 to-transparent" />

          {/* Scrollable Content Area */}
          <div className="relative max-h-[70vh] overflow-y-auto scrollbar-hide p-8">
            <div className="relative">
              {/* Top Fade Mask */}
              <div className="sticky top-0 h-8 bg-gradient-to-b from-black/20 to-transparent pointer-events-none opacity-0 group-scroll-top:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="py-4">{children}</div>

              {/* Bottom Fade Mask */}
              <div className="sticky bottom-0 h-8 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-scroll-bottom:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Card Footer */}
          <div className="absolute -bottom-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fern_green-500/50 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
