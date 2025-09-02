"use client"

import { cn } from "@/lib/utils"
import { MailIcon, Menu, SettingsIcon, TextIcon, UserIcon } from "lucide-react"
import * as motion from "motion/react-client"
import { useCallback, useEffect, useRef, useState } from "react"


export const MenuExtend = () => {

    const ref = useRef <HTMLDivElement>(null)

    const [isOpen, setIsOpen] = useState(false)

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false)
        }
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen, handleClickOutside])

    
	return (
        
            <div className={cn('h-full flex items-start px-24 py-32', isOpen ? 'justify-center' : 'justify-center')}>


                <div className={cn('flex relative transition-all', isOpen ? '-translate-y-0' : '')}>
                    <motion.div
                        ref={ref}
                        layout 
                        className={cn('bg-gray-800 text-gray-200' )}
                        initial={false}
                        animate={{ 
                            borderRadius: !isOpen ? '12px' : '62px',
                        }}
                        transition={{type: "spring", bounce: 0.25}}
                    >
                        {
                            !isOpen && 
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1, transition: { duration: 0.3, delay: .5 }}} 
                                exit={undefined} 
                                className="p-3"
                                onClick={() => !isOpen && setIsOpen(true)}
                            >
                                <Menu className="size-4"  />
                            </motion.div>
                        }
                        {
                            isOpen && <motion.div 
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: { duration: 0.3, delay: 0.3 }}} 
                            exit={undefined}
                            className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2 p-4 justify-center">
                                    <div className="p-2">
                                        <UserIcon className="size-4" />
                                    </div>
                                    <div className="p-2">
                                        <SettingsIcon className="size-4" />
                                    </div>
                                    <div className="p-2">
                                        <TextIcon className="size-4" />
                                    </div>
                                    <div className="p-2">
                                        <MailIcon className="size-4" />
                                    </div>
                                </div>
                                
                            </motion.div>
                        }


                    </motion.div>
                </div>
                
            </div>
	)
}