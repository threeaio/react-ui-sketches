
"use client"

import { ExtendFromGridItem, type ExtendFromGridItemProps } from "./extend-from-grid-item";
import { EyeIcon, ImageIcon, PenIcon } from "lucide-react";
import { useState } from "react";

export function ExtendFromGrid() {

    const [isExpanded, setIsExpanded] = useState<number | null>(null);

    const items: Omit<ExtendFromGridItemProps, "isExpanded" | "setIsExpanded" | "close">[] = [
        {
            title: "Editor",
            icon: <EyeIcon className="size-4" />,
            description: (<div className="space-y-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>)
           
        },
        {
            title: "Designer",
            icon: <EyeIcon className="size-4" />,
            description: (<div className="space-y-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>  )
        },
        {
            title: "Designer",
            icon: <EyeIcon className="size-4" />,
            description: (<div className="space-y-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore mat <a href="https://www.google.com" className="text-blue-500">google.com</a>.</p>
            </div>  )
        },

        {
            title: "Worker",
            icon: <EyeIcon className="size-4" />,
            description: (<div className="space-y-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</p>
                <div className="mx-auto max-w-full aspect-video flex items-center justify-center rounded-lg bg-gray-300  dark:bg-gray-800 mt-12 opacity-70">
                    <ImageIcon className="size-32 text-gray-900" strokeWidth={1.5} />
                </div>
               
            </div>  )
        },
        {
            title: "Worker",
            icon: <EyeIcon className="size-4" />,
            description: (<div className="space-y-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</p>
                <div className="mx-auto max-w-full aspect-video flex items-center justify-center rounded-lg bg-gray-300  dark:bg-gray-800 mt-12 opacity-70">
                    <ImageIcon className="size-32 text-gray-900" strokeWidth={1.5} />
                </div>
               
            </div>  )
        },
        {
            title: "Designer",
            icon: <EyeIcon className="size-4" />,
            description: (<div className="space-y-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore mat <a href="https://www.google.com" className="text-blue-500">google.com</a>.</p>
            </div>  )
        },
        {
            title: "Worker",
            icon: <EyeIcon className="size-4" />,
            description: (<div className="space-y-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</p>
                <div className="mx-auto max-w-full aspect-video flex items-center justify-center rounded-lg bg-gray-300  dark:bg-gray-800 mt-12 opacity-70">
                    <ImageIcon className="size-32 text-gray-900" strokeWidth={1.5} />
                </div>
               
            </div>  )
        },
    ]


	return <div className="mx-auto w-full grid md:grid-cols-2 lg:grid-cols-4  gap-4 p-24">
        <ExtendFromGridItem {...items[0]} isExpanded={isExpanded === 0} setIsExpanded={() => setIsExpanded(0)} close={() => setIsExpanded(null)} />
        <ExtendFromGridItem {...items[1]} isExpanded={isExpanded === 1} setIsExpanded={() => setIsExpanded(1)} close={() => setIsExpanded(null)} />
        <ExtendFromGridItem {...items[2]} isExpanded={isExpanded === 2} setIsExpanded={() => setIsExpanded(2)} close={() => setIsExpanded(null)} />
        <ExtendFromGridItem {...items[3]} isExpanded={isExpanded === 3} setIsExpanded={() => setIsExpanded(3)} close={() => setIsExpanded(null)} />
        <ExtendFromGridItem {...items[4]} isExpanded={isExpanded === 4} setIsExpanded={() => setIsExpanded(4)} close={() => setIsExpanded(null)} />
        <ExtendFromGridItem {...items[5]} isExpanded={isExpanded === 5} setIsExpanded={() => setIsExpanded(5)} close={() => setIsExpanded(null)} />
        <ExtendFromGridItem {...items[6]} isExpanded={isExpanded === 6} setIsExpanded={() => setIsExpanded(6)} close={() => setIsExpanded(null)} />
    </div>;
}