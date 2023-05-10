"use client";

import { motion } from "framer-motion";

const TRANSITION_DELAY = 0.1;

const MotionText = ({text}: {text: string}) => {
  return (
    <p className="flex text-2xl font-mono font-semibold text-foreground/20">
      {text.split("").map((word, index) => (
        <motion.span
          style={{ marginRight: word === " " ? 4 : 1 }}
          key={`motion-text-${index}-${word}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: TRANSITION_DELAY * index,
            ease: 'easeIn',
            duration: 0.6,
            type: 'spring'
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export default MotionText;
