import { easeOut, motion } from "motion/react";
import { useEffect, useState } from "react";

export const AnimatedIsoCube = ({
  size = 50,
  className,
}: {
  size?: number;
  className?: string;
}) => {
  const center = {
    cx: size / 2,
    cy: size / 2,
  };

  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((tick) => tick + (1 % 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getXYOnHexagonByIndex = (index: number) => {
    const x =
      center.cx + (Math.cos((index * Math.PI - Math.PI * 1.5) / 3) * size) / 2;
    const y =
      center.cy + (Math.sin((index * Math.PI - Math.PI * 1.5) / 3) * size) / 2;
    return { x, y };
  };

  const p1 = () => {
    const lt = getXYOnHexagonByIndex(0);
    const rt = getXYOnHexagonByIndex(1);
    const rb = { x: center.cx, y: center.cy };
    const lb = getXYOnHexagonByIndex(5);
    return `M ${lt.x} ${lt.y} L ${rt.x} ${rt.y}  L ${rb.x} ${rb.y} L ${lb.x} ${lb.y} Z`;
  };

  const p2 = () => {
    const lt = getXYOnHexagonByIndex(1);
    const rt = getXYOnHexagonByIndex(2);
    const rb = getXYOnHexagonByIndex(3);
    const lb = { x: center.cx, y: center.cy };
    return `M ${lt.x} ${lt.y} L ${rt.x} ${rt.y}  L ${rb.x} ${rb.y} L ${lb.x} ${lb.y} Z`;
  };

  const p3 = () => {
    const lt = { x: center.cx, y: center.cy };
    const rt = getXYOnHexagonByIndex(3);
    const rb = getXYOnHexagonByIndex(4);
    const lb = getXYOnHexagonByIndex(5);
    return `M ${lt.x} ${lt.y} L ${rt.x} ${rt.y}  L ${rb.x} ${rb.y} L ${lb.x} ${lb.y} Z`;
  };

  const p4 = () => {
    const lt = getXYOnHexagonByIndex(5);
    const rt = { x: center.cx, y: center.cy };
    const rb = getXYOnHexagonByIndex(3);
    const lb = getXYOnHexagonByIndex(4);
    return `M ${lt.x} ${lt.y} L ${rt.x} ${rt.y}  L ${rb.x} ${rb.y} L ${lb.x} ${lb.y} Z`;
  };

  const paths = [p1(), p2(), p3(), p4()];

  const pathVariants = {
    "0": {
      d: paths[0],

      transition: { duration: 0.5, ease: easeOut },
    },
    "1": {
      d: paths[1],
      transition: { duration: 0.5, ease: easeOut },
    },
    "2": {
      d: paths[2],
      transition: { duration: 0.5, ease: easeOut },
      transitionEnd: { d: paths[3] },
    },
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      <motion.g>
        {/* <path
          fill="rgba(0, 0, 0, 0.1)"
          d={`M ${getXYOnHexagonByIndex(0).x} ${getXYOnHexagonByIndex(0).y} L ${getXYOnHexagonByIndex(1).x} ${getXYOnHexagonByIndex(1).y} L ${getXYOnHexagonByIndex(2).x} ${getXYOnHexagonByIndex(2).y} L ${getXYOnHexagonByIndex(3).x} ${getXYOnHexagonByIndex(3).y} L ${getXYOnHexagonByIndex(4).x} ${getXYOnHexagonByIndex(4).y} L ${getXYOnHexagonByIndex(5).x} ${getXYOnHexagonByIndex(5).y} Z`}
        /> */}
        <motion.path
          fill="rgba(0, 0, 0, 0.1)"
          data-name={"lt"}
          d={paths[tick % 3]}
          variants={pathVariants}
          initial="0"
          animate={(tick % 3).toString()}
        ></motion.path>
        {/* <motion.path
          strokeWidth={0.5}
          stroke="currentColor"
          fill="none"
          data-name={"rt"}
          variants={pathVariants}
          initial="1"
          animate={((tick + 1) % 3).toString()}
        ></motion.path>
        <motion.path
          strokeWidth={0.5}
          stroke="currentColor"
          fill="none"
          data-name={"rb"}
          variants={pathVariants}
          initial="2"
          animate={((tick + 2) % 3).toString()}
        ></motion.path> */}
      </motion.g>
    </svg>
  );
};
