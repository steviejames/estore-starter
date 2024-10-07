import { cn } from '@/lib/utils'
import React, { MouseEventHandler } from 'react'


interface IconsButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string
}

function IconButton({ icon, className, onClick }: IconsButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn("rounded-full flex items-center justify-center bg-white shadow-md p-2 border hover:scale-110 transition-none", className)}>
            {icon}
        </button>
    )
}

export default IconButton