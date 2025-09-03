import {
  TeamViewerItem,
  type TeamViewerItemProps,
} from "@/components/features/team-viewer/team-viewer-item";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const data: Omit<
  TeamViewerItemProps,
  | "isFocused"
  | "setIsFocused"
  | "unsetIsFocused"
  | "otherFocused"
  | "position"
  | "total"
  | "rightWithoutVisibleUser"
>[] = [
  {
    name: "John Doe",
    imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jane Doe",
    imgSrc: "https://randomuser.me/api/portraits/women/93.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  },
  {
    name: "Hannah Lorentz",
    imgSrc: "https://randomuser.me/api/portraits/women/13.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jimmy Smith",
    imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    name: "Lisa Schröder",
    imgSrc: "https://randomuser.me/api/portraits/women/23.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  },
];

export function TeamViewer() {
  const ref = useRef<HTMLUListElement>(null);
  const [visibleUser, setVisibleUser] = useState<number | null>(null);

  const getPercentageFromRightWithoutVisibleUser = useCallback(
    (index: number) => {
      if (index === visibleUser || visibleUser == null) {
        return 0;
      }
      const indexWithoutVisibleUser = index > visibleUser ? index - 1 : index;
      const inversedIndex = data.length - 2 - indexWithoutVisibleUser;
      return inversedIndex * 28;
    },
    [visibleUser],
  );

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref && ref.current && !ref.current.contains(event.target as Node)) {
      setVisibleUser(null);
    }
  }, []);

  useEffect(() => {
    if (visibleUser !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visibleUser, handleClickOutside]);

  return (
    <motion.ul
      ref={ref}
      className={cn(
        " bg-gray-800 text-white my-24 rounded-full mx-auto w-fit p-4 min-w-0 overflow-hidden",
        visibleUser !== null && "w-220 max-w-full",
      )}
      style={{ borderRadius: 68 }}
      layout
      transition={{ type: "spring", bounce: 0.25, when: "afterChildren" }}
    >
      <ul className="relative w-full flex flex-row flex-wrap justify-between gap-12">
        {data.map((person, index) => {
          return (
            <TeamViewerItem
              key={person.name}
              {...person}
              isFocused={visibleUser === index}
              otherFocused={visibleUser !== index && visibleUser !== null}
              setIsFocused={() => setVisibleUser(index)}
              unsetIsFocused={() => setVisibleUser(null)}
              position={index}
              total={data.length}
              rightWithoutVisibleUser={getPercentageFromRightWithoutVisibleUser(
                index,
              )}
            />
          );
        })}
      </ul>
    </motion.ul>
  );
}
