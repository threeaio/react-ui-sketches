import { easeIn, easeOut, motion, spring } from "motion/react";
import { useEffect, useState } from "react";

export const AnimatedSmile = ({
  isChecked,
  size = 50,
  delay = 0,
  className,
}: {
  isChecked: boolean;
  size?: number;
  delay?: number;
  className?: string;
}) => {
  const [isCheckedInternal, setIsCheckedInternal] = useState(false);

  const svgSize = 50;

  useEffect(() => {
    setTimeout(() => {
      setIsCheckedInternal(isChecked);
    }, delay * 1000);
  }, [isChecked]);

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
    const r = svgSize * 0.32; // ~1.6 for 50
    return { cx, cy, r };
  };

  const getEyeDiagonalSegments = (side: "left" | "right") => {
    const { cx, cy } = getEyeCenter(side);
    const crossOffset = 4;
    return [
      // Diagonal 1: two segments from center outwards
      { x1: cx, y1: cy, x2: cx - crossOffset, y2: cy - crossOffset },
      { x1: cx, y1: cy, x2: cx + crossOffset, y2: cy + crossOffset },
      // Diagonal 2: two segments from center outwards
      { x1: cx, y1: cy, x2: cx + crossOffset, y2: cy - crossOffset },
      { x1: cx, y1: cy, x2: cx - crossOffset, y2: cy + crossOffset },
    ] as const;
  };

  const getMouthPath = (sad: boolean) => {
    const centerX = svgSize / 2;
    const width = sad ? svgSize - 30 : svgSize - 40;
    const startY = sad ? svgSize - 15 : svgSize - 20;
    const bezierOffset = sad ? 6 : 0;
    return `M ${centerX - width / 2} ${startY} Q ${centerX} ${startY - bezierOffset} ${centerX + width / 2} ${startY}`;
  };

  // Mouth (neutral: straight line) animate to (sad: curved up)
  const mouthVariants = {
    isUnchecked: {
      d: getMouthPath(false),
      transition: { duration: 0.25, ease: easeIn },
    },
    isChecked: {
      d: getMouthPath(true),
      transition: { duration: 0.3, ease: easeOut, delay: 0.05 },
    },
  } as const;

  const circleVariants = {
    isUnchecked: {
      scale: 0.9,
      opacity: 1,
      transition: { type: spring, bounce: 0.35 },
    },
    isChecked: {
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
        initial="isUnchecked"
        animate={isCheckedInternal ? "isChecked" : "isUnchecked"}
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
          strokeWidth="2.4"
          strokeLinecap="round"
          animate={
            isCheckedInternal
              ? { x1: seg.x1, y1: seg.y1, x2: seg.x2, y2: seg.y2 }
              : {
                  x1: leftDot.cx,
                  y1: leftDot.cy,
                  x2: leftDot.cx,
                  y2: leftDot.cy,
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
          strokeWidth="2.4"
          strokeLinecap="round"
          animate={
            isCheckedInternal
              ? { x1: seg.x1, y1: seg.y1, x2: seg.x2, y2: seg.y2 }
              : {
                  x1: rightDot.cx,
                  y1: rightDot.cy,
                  x2: rightDot.cx,
                  y2: rightDot.cy,
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
        initial="isUnchecked"
        animate={isCheckedInternal ? "isChecked" : "isUnchecked"}
      />
    </svg>
  );
};
