

import { Button } from "@/components/ui/button";
import { type JSX } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";


export interface ExtendFromGridItemProps {
    title: string,
    icon: JSX.Element,
    description: JSX.Element,
    isExpanded: boolean,
    setIsExpanded: () => void,
    close: () => void,
}


export function ExtendFromGridItem({ title, icon, description, isExpanded, setIsExpanded, close }: ExtendFromGridItemProps) {


	return (
        <motion.div layout className={cn('h-full', isExpanded ? "col-span-2" : "")} transition={{ type: "spring", bounce: 0.25 }}>
        <div className={cn("dark:bg-gray-900 bg-gray-100 p-6 transition-all duration-300 h-full min-h-48 rounded-[1.5rem]", isExpanded ? "pt-12 px-12 pb-12" : "p-6 ")}>
                {
                    isExpanded && (
                        <motion.div 
                            initial={{opacity: 0}}
                            animate={{opacity: 1 , transition: { duration: 0.3, delay: .2 }}} 
                            exit={{opacity: 0, transition: { duration: 0, delay: 0 }}} 
                            className="flex items-center justify-between ">
                                <h3 className={cn("font-medium  text-3xl")}>{title}</h3>
                                <Button className="cursor-pointer translate-x-6" variant="ghost" size="icon" onClick={() => close()}>
                                    <XIcon className="size-4" />
                                </Button> 
                        </motion.div>
                    )
                }
                       {
                    !isExpanded && (
                        <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1 , transition: { duration: 0.3, delay: .3 }}} 
                        exit={{opacity: 0, transition: { duration: 0, delay: 0 }}} 
                        className="flex items-center justify-between " >
                            <h3 className={cn("font-medium  text-sm")}>{title}</h3>
                            <Button className="cursor-pointer" variant="ghost" size="icon" onClick={() => setIsExpanded()}>
                                {icon}
                            </Button> 
                        </motion.div>
                    )
                }
                {/* <div className={cn('transition-opacity duration-300', isExpanded ? "opacity-100" : "opacity-0")}> */}
                {isExpanded && (
                    <motion.div 
                    className="mt-12"
                        initial={{opacity: 0}}
                        animate={{opacity: 1 , transition: { duration: 0.3, delay: .5 }}} 
                        exit={{opacity: 0, transition: { duration: 0, delay: 0 }}} 
                        >
                        <span className="text-sm opacity-60">{description}</span>
                    </motion.div >
                )}
                {/* </div> */}
            </div>
        </motion.div>)
}