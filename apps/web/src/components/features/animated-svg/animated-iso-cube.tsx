import { motion } from "motion/react";
import { useMemo } from "react";

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
    const lt = { x: center.cx, y: center.cy };
    const rt = getXYOnHexagonByIndex(1);
    const rb = getXYOnHexagonByIndex(2);
    const lb = getXYOnHexagonByIndex(3);
    return `M ${lt.x} ${lt.y} L ${rt.x} ${rt.y}  L ${rb.x} ${rb.y} L ${lb.x} ${lb.y} Z`;
  };

  const p3 = () => {
    const lt = getXYOnHexagonByIndex(5);
    const rt = { x: center.cx, y: center.cy };
    const rb = getXYOnHexagonByIndex(3);
    const lb = getXYOnHexagonByIndex(4);
    return `M ${lt.x} ${lt.y} L ${rt.x} ${rt.y}  L ${rb.x} ${rb.y} L ${lb.x} ${lb.y} Z`;
  };

  const paths = [p1(), p2(), p3()];

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      <motion.g>
        <path fill="rgba(255, 0, 0, 0.4)" data-name={"lt"} d={paths[0]}></path>
        <path fill="rgba(0, 255, 0, 0.4)" data-name={"rt"} d={paths[1]}></path>
        <path fill="rgba(0, 0, 255, 0.4)" data-name={"rb"} d={paths[2]}></path>
      </motion.g>
    </svg>
  );
};
