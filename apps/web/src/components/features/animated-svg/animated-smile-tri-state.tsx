import { easeIn, easeOut, motion, spring } from "motion/react";

export const AnimatedSmileState = ({
  size = 50,
  className,
  state,
}: {
  size?: number;
  className?: string;
  state: "idle" | "success" | "error";
}) => {
  const svgSize = 50;

  // Eyes: crosses that extend from the center (appear as dots initially)

  const getEyeCenter = (side: "left" | "right") => {
    const centerX = svgSize / 2;
    const offsetX = svgSize * 0.14; // ~7 for 50
    const eyeY = svgSize * 0.4; // ~20 for 50
    return {
      cx: centerX + (side === "left" ? -offsetX : offsetX),
      cy: eyeY,
    };
  };

  const getEyeDotProps = (side: "left" | "right") => {
    const { cx, cy } = getEyeCenter(side);
    return { cx, cy };
  };

  const getEyeDiagonalSegments = (side: "left" | "right") => {
    const { cx, cy } = getEyeCenter(side);
    const crossOffset = 3;
    return [
      // Diagonal 1: two segments from center outwards
      { x1: cx, y1: cy, x2: cx - crossOffset, y2: cy - crossOffset },
      { x1: cx, y1: cy, x2: cx + crossOffset, y2: cy + crossOffset },
      // Diagonal 2: two segments from center outwards
      { x1: cx, y1: cy, x2: cx + crossOffset, y2: cy - crossOffset },
      { x1: cx, y1: cy, x2: cx - crossOffset, y2: cy + crossOffset },
    ] as const;
  };

  const getMouthPath = (state: "idle" | "success" | "error") => {
    const centerX = svgSize / 2;
    const width =
      state === "success" || state === "error" ? svgSize - 30 : svgSize - 40;
    const startY =
      state === "error"
        ? svgSize - 15
        : state === "success"
          ? svgSize - 16
          : svgSize - 20;
    const bezierOffset = state === "success" ? -5 : state === "error" ? 6 : 0;
    return `M ${centerX - width / 2} ${startY} Q ${centerX} ${startY - bezierOffset} ${centerX + width / 2} ${startY}`;
  };

  // Mouth (neutral: straight line) animate to (sad: curved up)
  const mouthVariants = {
    idle: {
      d: getMouthPath("idle"),
      transition: { duration: 0.25, ease: easeOut },
    },
    error: {
      d: getMouthPath("error"),
      rotate: -12,
      transition: { duration: 0.5, ease: easeOut, delay: 0 },
    },
    success: {
      d: getMouthPath("success"),
      transition: { duration: 0.2, ease: easeOut },
    },
  } as const;

  const circleVariants = {
    idle: {
      scale: 0.9,
      opacity: 1,
      transition: { type: spring, bounce: 0.35 },
    },
    error: {
      scale: 1,
      opacity: 1,
      transition: { type: spring, bounce: 0.35 },
    },
    success: {
      scale: 1,
      opacity: 1,
      transition: { type: spring, bounce: 0.35 },
    },
  };

  const leftDot = getEyeDotProps("left");
  const rightDot = getEyeDotProps("right");
  const leftSegments = getEyeDiagonalSegments("left");
  const rightSegments = getEyeDiagonalSegments("right");

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      className={className}
    >
      <motion.circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        variants={circleVariants}
        initial="idle"
        animate={state}
      />
      {/* Eyes: crosses that grow from a dot at the center */}
      {leftSegments.map((seg, idx) => (
        <motion.line
          key={`l-${idx}`}
          x1={leftDot.cx}
          y1={leftDot.cy}
          x2={leftDot.cx}
          y2={leftDot.cy}
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          animate={
            state == "error"
              ? { x1: seg.x1, y1: seg.y1, x2: seg.x2, y2: seg.y2 }
              : {
                  x1: leftDot.cx,
                  y1: leftDot.cy,
                  x2: leftDot.cx,
                  y2: leftDot.cy,
                  strokeWidth: state == "idle" ? 3 : 4,
                }
          }
          transition={{
            duration: 0.3,
            ease: easeOut,
            delay: 0.05,
          }}
        />
      ))}
      {rightSegments.map((seg, idx) => (
        <motion.line
          key={`r-${idx}`}
          x1={rightDot.cx}
          y1={rightDot.cy}
          x2={rightDot.cx}
          y2={rightDot.cy}
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          animate={
            state == "error"
              ? {
                  x1: seg.x1,
                  y1: seg.y1,
                  x2: seg.x2,
                  y2: seg.y2,
                }
              : {
                  x1: rightDot.cx,
                  y1: rightDot.cy,
                  x2: rightDot.cx,
                  y2: rightDot.cy,
                  strokeWidth: state == "idle" ? 3 : 4,
                }
          }
          transition={{
            duration: 0.3,
            ease: easeOut,
            delay: 0.05,
          }}
        />
      ))}

      {/* Mouth */}
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        variants={mouthVariants}
        initial="idle"
        animate={state}
      />
    </svg>
  );
};
