"use client"

import React, { useRef, useState, type MouseEvent, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlowButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: "primary" | "secondary" | "outline" | "dark"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
}

const variantStyles = {
  primary: {
    bg: "#ff5b01",
    text: "#ffffff",
    hoverText: "#ffffff",
    glow: "#ff8c42",
  },
  secondary: {
    bg: "#1a1a1a",
    text: "#ffffff",
    hoverText: "#ff5b01",
    glow: "#ff5b01",
  },
  outline: {
    bg: "transparent",
    text: "#1a1a1a",
    hoverText: "#ff5b01",
    glow: "#ff5b01",
  },
  dark: {
    bg: "rgba(255,255,255,0.1)",
    text: "#ffffff",
    hoverText: "#ff5b01",
    glow: "#ff5b01",
  },
}

const sizeStyles = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-8 py-4 text-sm",
  lg: "px-10 py-5 text-base",
}

export function GlowButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
}: GlowButtonProps) {
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null)
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const styles = variantStyles[variant]

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setGlowPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const baseClasses = cn(
    "relative inline-flex items-center justify-center gap-2 overflow-hidden cursor-pointer font-heading font-bold uppercase tracking-wider rounded-full no-underline transition-colors duration-300",
    sizeStyles[size],
    variant === "outline" && "border-2 border-gray-300 hover:border-brand-orange",
    variant === "dark" && "border border-white/20 hover:border-brand-orange/50 backdrop-blur-sm",
    disabled && "opacity-50 cursor-not-allowed",
    className
  )

  const content = (
    <>
      {/* Glow effect */}
      <div
        className="absolute w-[200px] h-[200px] rounded-full pointer-events-none transition-transform duration-300 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${glowPosition.x}px`,
          top: `${glowPosition.y}px`,
          background: `radial-gradient(circle, ${styles.glow}55 10%, transparent 70%)`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 0})`,
          zIndex: 0,
        }}
      />
      <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">
        {children}
      </span>
    </>
  )

  const sharedProps = {
    ref: buttonRef,
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    className: baseClasses,
    style: {
      backgroundColor: styles.bg,
      color: isHovered ? styles.hoverText : styles.text,
      boxShadow: variant === "primary" ? "0 4px 24px rgba(255, 91, 1, 0.3)" : undefined,
    },
  }

  if (href) {
    return (
      <a {...sharedProps} href={href}>
        {content}
      </a>
    )
  }

  return (
    <button {...sharedProps} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}
