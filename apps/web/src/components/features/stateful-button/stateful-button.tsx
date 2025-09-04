import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Check, Loader2, X } from "lucide-react";
import { AnimatePresence, motion, type MotionProps } from "motion/react";
import { type UseMutationResult } from "@tanstack/react-query";
import { useState } from "react";

const stateFulButtonVariants = cva(
  "rounded-xl inline-flex justify-center items-center  disabled:pointer-events-none disabled:opacity-50 outline-none overflow-hidden ",
  {
    variants: {
      state: {
        idle: "cursor-pointer bg-primary text-primary-foreground ",
        pending: "bg-primary text-primary-foreground cursor-not-allowed",
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      size: "default",
      state: "idle",
    },
  },
);

type StatefulButtonProps = {
  mutation: UseMutationResult<unknown, Error, void, unknown>;
} & React.ComponentProps<"button"> &
  VariantProps<typeof stateFulButtonVariants> &
  MotionProps;

function ButtonContent({
  state,
  children,
}: {
  state: StatefulButtonProps["state"];
  children: React.ReactNode;
}) {
  return (
    <span className="flex items-center gap-2 whitespace-nowrap">
      {state === "pending" && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
          layout="preserve-aspect"
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <Loader2 className="size-6 animate-spin -ml-2 inline-block" />
          Doing somehting great
        </motion.span>
      )}

      {state === "success" && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
          layout="preserve-aspect"
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <motion.span
            initial={{ opacity: 0, x: -6 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, delay: 0.4 },
            }}
          >
            <Check className="size-8 -ml-2 inline-block" />
          </motion.span>
          We got something
        </motion.span>
      )}

      {state === "error" && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
          layout="preserve-aspect"
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <motion.span
            initial={{ opacity: 0, x: -6 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, delay: 0.4 },
            }}
          >
            <X className="size-8 -ml-2 inline-block" />
          </motion.span>

          <span> Oh no! We have a problem. </span>
        </motion.span>
      )}

      {state === "idle" && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2, delay: 0 } }}
          layout="preserve-aspect"
        >
          {" "}
          {children}{" "}
        </motion.span>
      )}
    </span>
  );
}

function StatefulButton({
  className,
  state,
  size,
  children,
  mutation,
  ...props
}: StatefulButtonProps) {
  const [timeout, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  return (
    <motion.button
      onClick={() => {
        if (timeout) {
          clearTimeout(timeout);
        }
        mutation.mutate(undefined, {
          onSettled: () => {
            const fooTimeout = setTimeout(() => {
              mutation.reset();
            }, 5000);
            setTimeoutId(fooTimeout);
            console.log("timeout", timeout);
          },
        });
      }}
      layout={true}
      data-slot="button"
      className={cn(stateFulButtonVariants({ size, state, className }))}
      style={{
        borderRadius: 16,
      }}
      transition={{ type: "spring", bounce: 0.08 }}
      {...props}
    >
      <ButtonContent state={state}>{children}</ButtonContent>
    </motion.button>
  );
}

export { StatefulButton, stateFulButtonVariants };
