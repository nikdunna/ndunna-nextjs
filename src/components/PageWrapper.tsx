"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { useEffect, useState } from "react";
import { useTransition } from "@/context/TransitionContext";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const { startTransition, endTransition } = useTransition();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <>
        <AnimatedBackground />
        <div>{children}</div>
      </>
    );
  }

  return (
    <>
      <AnimatedBackground />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        onAnimationStart={() => startTransition()}
        onAnimationComplete={() => endTransition()}
      >
        {children}
      </motion.div>
    </>
  );
}
