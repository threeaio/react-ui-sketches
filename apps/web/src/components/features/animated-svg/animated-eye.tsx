import { easeInOut, easeOut, motion } from "motion/react";

export type AnimatedEyeProps = {
  center: { cx: number; cy: number };
  state: "idle" | "pending" | "success" | "error";
};

export const AnimatedEye = ({ center, state }: AnimatedEyeProps) => {
  const { cx, cy } = center;

  const crossLength = 3;
  const crossLengthSuccess = 2;
  const pendingOffset = 2.1;

  const gVariants = {
    idle: {
      translateX: 0,
      transition: { duration: 0.2, ease: easeOut, repeat: 0 },
    },
    pending: {
      translateX: [0, -pendingOffset, pendingOffset],
      transition: {
        duration: 3,
        ease: easeInOut,
        repeat: Infinity,
        repeatType: "mirror" as const,
      },
    },
    error: {
      translateX: 0,
      transition: { duration: 0.2, ease: easeOut, repeat: 0 },
    },
    success: {
      translateX: 0,
      transition: { duration: 0.2, ease: easeOut, repeat: 0 },
    },
  };

  const crossSegmentsError = [
    { x1: cx, y1: cy, x2: cx - crossLength, y2: cy - crossLength },
    { x1: cx, y1: cy, x2: cx + crossLength, y2: cy + crossLength },
    { x1: cx, y1: cy, x2: cx + crossLength, y2: cy - crossLength },
    { x1: cx, y1: cy, x2: cx - crossLength, y2: cy + crossLength },
  ] as const;

  const crossSegmentsSuccess = [
    { x1: cx, y1: cy, x2: cx, y2: cy - crossLengthSuccess },
    { x1: cx, y1: cy, x2: cx, y2: cy - crossLengthSuccess },
    { x1: cx, y1: cy, x2: cx, y2: cy + crossLengthSuccess },
    { x1: cx, y1: cy, x2: cx, y2: cy + crossLengthSuccess },
  ] as const;

  const variants = crossSegmentsError.map((seg, idx) => {
    return {
      error: {
        x1: seg.x1,
        y1: seg.y1,
        x2: seg.x2,
        y2: seg.y2,
        strokeWidth: 2.4,
        transition: { duration: 0.2, ease: easeOut, repeat: 0 },
      },
      idle: {
        x1: cx,
        y1: cy,
        x2: cx,
        y2: cy,
        transition: { duration: 0.2, ease: easeOut, repeat: 0 },
      },
      pending: {
        x1: cx,
        y1: crossSegmentsSuccess[idx].y1,
        x2: cx,
        y2: crossSegmentsSuccess[idx].y2,
        transition: { duration: 0.2, ease: easeOut, repeat: 0 },
      },
      success: {
        x1: cx,
        y1: crossSegmentsSuccess[idx].y1,
        x2: cx,
        y2: crossSegmentsSuccess[idx].y2,
        transition: { duration: 0.2, ease: easeOut, repeat: 0 },
      },
    };
  });

  return (
    <motion.g variants={gVariants} initial="idle" animate={state}>
      {crossSegmentsError.map((_seg, idx) => (
        <motion.line
          key={idx}
          strokeWidth={3}
          stroke="currentColor"
          strokeLinecap="round"
          variants={variants[idx]}
          initial="idle"
          animate={state}
        />
      ))}
    </motion.g>
  );
};
