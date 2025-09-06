import { easeIn, easeOut, motion, spring } from "motion/react";
import { useEffect, useState } from "react";

export const AnimatedCheck = ({
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

  useEffect(() => {
    setTimeout(() => {
      setIsCheckedInternal(isChecked);
    }, delay * 1000);
  }, [isChecked]);

  // Animated Check Sign
  const checkmarkVariants = {
    isUnchecked: {
      pathLength: 0,
      opacity: 0,
      scale: 0.5,
      transition: {
        pathLength: {
          duration: 0.2,
          ease: easeIn,
          delay: 0.1,
        },
        opacity: { duration: 0.2, delay: 0.1 },
        scale: { duration: 0.2, delay: 0 },
      },
    },
    isChecked: {
      pathLength: 1,
      opacity: 1,
      scale: 1,
      transition: {
        pathLength: {
          duration: 0.2,
          ease: easeOut,
          delay: 0.2,
        },
        opacity: { duration: 0.1, delay: 0.2 },
        scale: { duration: 0.2, delay: 0.2 },
      },
    },
  };

  const circleVariants = {
    isUnchecked: {
      scale: 0.7,
      opacity: 0,
      transition: { type: spring, bounce: 0.35 },
    },
    isChecked: {
      scale: 1,
      opacity: 1,
      transition: { type: spring, bounce: 0.35 },
    },
  };

  return (
    <svg width={size} height={size} viewBox="0 0 50 50" className={className}>
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
      <motion.path
        d="M 15 25 L 22 32 L 35 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={checkmarkVariants}
        initial="isUnchecked"
        animate={isCheckedInternal ? "isChecked" : "isUnchecked"}
      />
    </svg>
  );
};
