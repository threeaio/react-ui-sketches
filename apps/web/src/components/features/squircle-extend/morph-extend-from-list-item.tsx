import { Button } from "@/components/ui/button";
import { type JSX } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { div } from "motion/react-client";
import { squircle } from "@/lib/corner-smoothing";

export interface MorphExtendFromListItemProps {
  title: string;
  icon: JSX.Element;
  description: JSX.Element;
  isExpanded: boolean;
  setIsExpanded: () => void;
  close: () => void;
}

// Create a Squircle with the `squircle` HOC:
const MySquircle = squircle(div, {
  cornerRadius: 24,
  borderWidth: 0,
});

export function MorphExtendFromListItem({
  title,
  icon,
  description,
  isExpanded,
  setIsExpanded,
  close,
}: MorphExtendFromListItemProps) {
  return (
    <MySquircle
      layout
      className={cn(
        "dark:bg-gray-900 bg-gray-100/50 ",
        isExpanded
          ? "w-3xl absolute bg-gray-100/100 top-[calc(var(--height-header)+1rem)] left-1/2 -translate-x-1/2"
          : "",
      )}
      transition={{ type: "spring", bounce: 0.25 }}
    >
      <div
        className={cn(
          "p-6 transition-all duration-300 relative",
          isExpanded ? "pt-12 px-12 pb-12 " : "p-6",
          "",
        )}
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, delay: 0.2 },
              }}
              exit={{ opacity: 0, transition: { duration: 0, delay: 0 } }}
              className="flex items-center justify-between "
            >
              <h3 className={cn("font-medium  text-3xl")}>{title}</h3>
              <Button
                className="cursor-pointer"
                variant="ghost"
                size="icon"
                onClick={() => close()}
              >
                <XIcon className="size-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, delay: 0.3 },
              }}
              exit={{ opacity: 0, transition: { duration: 0, delay: 0 } }}
              className="flex items-center justify-between "
              onClick={() => setIsExpanded()}
            >
              <h3 className={cn("font-medium  text-sm")}>{title}</h3>
              <Button className="cursor-pointer" variant="ghost" size="icon">
                {icon}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        {/* <div className={cn('transition-opacity duration-300', isExpanded ? "opacity-100" : "opacity-0")}> */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, delay: 0.5 },
              }}
              exit={{ opacity: 0, transition: { duration: 0, delay: 0 } }}
            >
              <span className="text-sm opacity-60">{description}</span>
            </motion.div>
          )}
          {/* </div> */}
        </AnimatePresence>
      </div>
    </MySquircle>
  );
}
