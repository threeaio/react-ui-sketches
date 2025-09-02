import { useOpenable } from "@/lib/hooks"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useRef } from "react"

export const IntactChilds = () => {

    const ref = useRef <HTMLDivElement>(null)
    const [isExpanded, setIsExpanded] = useOpenable(ref)

    const headlineVarfiants = {
        active: {
            fontSize: "64px",
            lineHeight: "64px" // line-height must be stable
        },
        inactive: {
          fontSize: "18px",
          lineHeight: "64px"
        }
      }

    return (
        <motion.div 
        ref={ref}
        layout
        className={cn('px-12 pb-12 pt-4 bg-gray-300 flex flex-col gap-12 ', isExpanded && 'col-span-2 pt-12')} 
        style={{borderRadius: 32}}
        transition={{type: "spring", bounce: 0.2}}
        onClick={() => !isExpanded && setIsExpanded(true)}
        >
            <motion.h2 
                initial="inactive"
                variants={headlineVarfiants}
                animate={isExpanded ? "active" : "inactive"}
                layout="preserve-aspect" // otherwise heavy flicker
                className={cn('font-bold block will-change-transform')}
            >Intact Childs</motion.h2>
            {
                isExpanded && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: { duration: 0.3, delay: .3 }}} 
                            layout className="flex flex-col gap-8">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </motion.div>
                )
            }
        </motion.div>
    )
}