"use client";

import { AnimatePresence, motion } from "framer-motion";

const TEXT = "BABA TAILORS • BABA TAILORS • ";
const RADIUS = 110;

export default function Loading() {
  const characters = TEXT.split("");
  const angleStep = 360 / characters.length;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center bg-white z-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{
            width: RADIUS * 2,
            height: RADIUS * 2,
            position: "relative",
          }}
        >
          {characters.map((char, i) => {
            const angle = angleStep * i;
            const rad = (angle * Math.PI) / 180;
            const x = RADIUS + RADIUS * Math.sin(rad);
            const y = RADIUS - RADIUS * Math.cos(rad);

            return (
              <span
                key={i}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                  fontSize: "24px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  transformOrigin: "center",
                }}
              >
                {char}
              </span>
            );
          })}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
