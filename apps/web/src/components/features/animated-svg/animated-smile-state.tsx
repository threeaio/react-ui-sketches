import { AnimatedEye } from "@/components/features/animated-svg/animated-eye";
import { easeInOut, easeOut, motion, spring } from "motion/react";

export type AnimatedSmileStateProps = {
  size?: number;
  className?: string;
  state: "idle" | "pending" | "success" | "error";
};

export const AnimatedSmileState = ({
  size = 50,
  className,
  state,
}: AnimatedSmileStateProps) => {
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

  const getMouthPath = (
    state: "idle" | "pendingSmile" | "success" | "error",
  ) => {
    const centerX = svgSize / 2;
    let width: number;
    let startY: number;
    let bezierOffset: number;

    switch (state) {
      case "success":
        width = svgSize - 30;
        startY = svgSize - 16;
        bezierOffset = -5;
        break;
      case "pendingSmile":
        width = svgSize - 35;
        startY = svgSize - 18;
        bezierOffset = -3;
        break;
      case "error":
        width = svgSize - 30;
        startY = svgSize - 15;
        bezierOffset = 6;
        break;
      case "idle":
      default:
        width = svgSize - 40;
        startY = svgSize - 20;
        bezierOffset = 0;
        break;
    }

    return `M ${centerX - width / 2} ${startY} Q ${centerX} ${startY - bezierOffset} ${centerX + width / 2} ${startY}`;
  };

  const mouthVariants = {
    idle: {
      d: getMouthPath("idle"),
      rotate: 0,
      transition: { duration: 0.25, ease: easeOut, repeat: 0 },
    },
    pending: {
      d: getMouthPath("pendingSmile"),
      rotate: [0, -12, 0, 6],
      transition: {
        ease: easeInOut,
        duration: 4.25,
        repeat: Infinity,
        repeatType: "mirror" as const,
      },
    },
    error: {
      d: getMouthPath("error"),
      rotate: -12,
      transition: { duration: 0.5, ease: easeOut, repeat: 0 },
    },
    success: {
      d: getMouthPath("success"),
      rotate: 0,
      transition: { duration: 0.2, ease: easeOut, repeat: 0 },
    },
  };

  const circleSpringBounce = 0.45;
  const circleVariants = {
    idle: {
      scale: 0.9,
      opacity: 1,
      transition: { type: spring, bounce: circleSpringBounce },
    },
    error: {
      scale: 1,
      opacity: 1,
      transition: { type: spring, bounce: circleSpringBounce },
    },
    pending: {
      scale: 1,
      opacity: 1,
      transition: { type: spring, bounce: circleSpringBounce },
    },
    success: {
      scale: 1,
      opacity: 1,
      transition: { type: spring, bounce: circleSpringBounce },
    },
  };

  const leftEyeDot = getEyeDotProps("left");
  const rightEyeDot = getEyeDotProps("right");

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

      <AnimatedEye center={leftEyeDot} state={state} />
      <AnimatedEye center={rightEyeDot} state={state} />

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
