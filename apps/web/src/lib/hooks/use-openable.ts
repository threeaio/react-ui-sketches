import { useCallback, useEffect, useState } from "react"

export const useOpenable = (ref: React.RefObject<HTMLDivElement | null> , initialState: boolean = false) => {
    const [isOpen, setIsOpen] = useState(initialState)

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (ref && ref.current && !ref.current.contains(event.target as Node)) {
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

    return [isOpen, setIsOpen] as const
}