import React, { ElementType, ComponentPropsWithoutRef } from "react"
import { cn } from "../../lib/utils"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = color || "#6b7280" // Gray-500 accent color

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[20px]",
        className
      )} 
      {...props}
    >
      <div
        className={cn(
          "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
          "opacity-60" 
        )}
        style={{
          background: `radial-gradient(circle, #9ca3af, transparent 20%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0",
          "opacity-60"
        )}
        style={{
          background: `radial-gradient(circle, #9ca3af, transparent 20%)`,
          animationDuration: speed,
        }}
      />
      <div className={cn(
        "relative z-1 border text-gray-900 text-center text-base py-4 px-6 rounded-[20px] font-semibold",
        "bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition-all duration-300"
      )}>
        {children}
      </div>
    </Component>
  )
}
