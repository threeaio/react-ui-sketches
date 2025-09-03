import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

export interface TeamViewerItemProps {
  name: string;
  imgSrc: string;
  description: string;
  isFocused: boolean;
  otherFocused: boolean;
  setIsFocused: () => void;
  unsetIsFocused: () => void;
  position: number;
  total: number;
  rightWithoutVisibleUser: number;
}

export function TeamViewerItem({
  name,
  imgSrc,
  description,
  isFocused,
  setIsFocused,
  unsetIsFocused,
  otherFocused,
  position,
  total,
  rightWithoutVisibleUser,
}: TeamViewerItemProps) {
  return (
    <motion.li
      layout="position"
      className={cn(
        "flex flex-row gap-3 justify-center items-start cursor-pointer p-2 origin-top-right group",
        otherFocused && "gap-0 p-0 absolute  hover:z-50",
      )}
      style={{
        left: isFocused
          ? 0
          : otherFocused
            ? "auto"
            : (position / total) * 100 + "%",
        right: otherFocused ? rightWithoutVisibleUser + "px" : "auto",
      }}
      transition={{
        type: "spring",
        bounce: 0.15,
        visualDuration: otherFocused ? 0.3 : 0.4,
        delay: isFocused || otherFocused ? 0 : 0,
      }}
      key={name}
      onClick={() => (isFocused ? unsetIsFocused() : setIsFocused())}
    >
      <div
        className={cn(
          "h-20 flex items-center justify-center ",
          isFocused && "w-30",
        )}
      >
        <img
          src={imgSrc}
          alt={name}
          loading="lazy"
          className={cn(
            "rounded-full transition-all duration-300 size-14 border-2 border-gray-400",
            isFocused && "size-20 scale-100 mr-0 ",
            otherFocused && " size-9 hover:scale-120",
            !isFocused && !otherFocused && "group-hover:scale-120",
          )}
        />
      </div>
      <div className="text-lg flex flex-col gap-.5">
        <AnimatePresence>
          {!otherFocused && (
            <motion.div
              className={cn(
                "flex items-center h-20 -mb-2 text-sm transition-all duration-300",
                isFocused && "text-3xl",
              )}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, delay: 0.4 },
              }}
              exit={{ opacity: 0, transition: { duration: 0, delay: 0 } }}
            >
              {name}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isFocused ? (
            <motion.p
              className="text-sm opacity-60 max-w-xl pb-4"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, delay: 0.5 },
              }}
              exit={{ opacity: 0, transition: { duration: 0, delay: 0 } }}
            >
              {description}
            </motion.p>
          ) : (
            <p className="hidden">&nbsp;</p>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
}
