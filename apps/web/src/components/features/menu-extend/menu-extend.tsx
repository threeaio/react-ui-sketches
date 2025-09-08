"use client";

import { useOpenable } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { MailIcon, Menu, SettingsIcon, TextIcon, UserIcon } from "lucide-react";
import { stagger } from "motion/react";
import * as motion from "motion/react-client";
import { useRef } from "react";

export const MenuExtend = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useOpenable(ref);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        delayChildren: stagger(0.16),
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div
      className={cn(
        "h-full flex items-start px-24 py-32",
        isOpen ? "justify-center" : "justify-center",
      )}
    >
      <div
        className={cn(
          "flex relative transition-all",
          isOpen ? "-translate-y-0" : "",
        )}
      >
        <motion.div
          ref={ref}
          layout
          className={cn("bg-gray-800 text-gray-200")}
          initial={false}
          animate={{
            borderRadius: !isOpen ? "12px" : "62px",
          }}
          transition={{
            type: "spring",
            bounce: isOpen ? 0.35 : 0.25,
            visualDuration: isOpen ? 0.3 : 0.4,
          }}
        >
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, delay: 0.5 },
              }}
              exit={undefined}
              className="p-4"
              onClick={() => !isOpen && setIsOpen(true)}
            >
              <Menu className="size-4" />
            </motion.div>
          )}
          {isOpen && (
            <div className="flex flex-col gap-4">
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-2 p-6 justify-center"
              >
                <motion.li variants={item} className="p-2">
                  <UserIcon className="size-4" />
                </motion.li>
                <motion.li variants={item} className="p-2">
                  <SettingsIcon className="size-4" />
                </motion.li>
                <motion.li variants={item} className="p-2">
                  <TextIcon className="size-4" />
                </motion.li>
                <motion.li variants={item} className="p-2">
                  <MailIcon className="size-4" />
                </motion.li>
              </motion.ul>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
