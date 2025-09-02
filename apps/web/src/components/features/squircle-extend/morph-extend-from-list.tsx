
"use client"

import { MorphExtendFromListItem, type MorphExtendFromListItemProps } from "./morph-extend-from-list-item";
import { ImageIcon, PenIcon } from "lucide-react";
import { useState } from "react";

export function MorphExtendFromList() {

    const [isExpanded, setIsExpanded] = useState<number | null>(null);

    const items: Omit<MorphExtendFromListItemProps, "isExpanded" | "setIsExpanded" | "close">[] = [
        {
            title: "Editor",
            icon: <PenIcon className="size-4" />,
            description: (<div className="space-y-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>)
           
        },
        {
            title: "Designer",
            icon: <PenIcon className="size-4" />,
            description: (<div className="space-y-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>  )
        },
        {
            title: "Designer",
            icon: <PenIcon className="size-4" />,
            description: (<div className="space-y-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore mat <a href="https://www.google.com" className="text-blue-500">google.com</a>.</p>
            </div>  )
        },

        {
            title: "Worker",
            icon: <PenIcon className="size-4" />,
            description: (<div className="space-y-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</p>
                <div className="mx-auto h-72 aspect-video flex items-center justify-center rounded-lg bg-gray-300  dark:bg-gray-800 mt-12 opacity-70">
                    <ImageIcon className="size-32 text-gray-900" strokeWidth={1.5} />
                </div>
               
            </div>  )
        },
    ]


	return <div className="mx-auto w-full h-auto px-12 py-8 space-y-1">
        <MorphExtendFromListItem {...items[0]} isExpanded={isExpanded === 0} setIsExpanded={() => setIsExpanded(0)} close={() => setIsExpanded(null)} />
        <MorphExtendFromListItem {...items[1]} isExpanded={isExpanded === 1} setIsExpanded={() => setIsExpanded(1)} close={() => setIsExpanded(null)} />
        <MorphExtendFromListItem {...items[2]} isExpanded={isExpanded === 2} setIsExpanded={() => setIsExpanded(2)} close={() => setIsExpanded(null)} />
        <MorphExtendFromListItem {...items[3]} isExpanded={isExpanded === 3} setIsExpanded={() => setIsExpanded(3)} close={() => setIsExpanded(null)} />
    </div>;
}