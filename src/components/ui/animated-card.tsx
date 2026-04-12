import * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AnimatedCard({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("relative group/glow", className)} {...props}>
      <div
        aria-hidden
        className="card-glow-aura pointer-events-none absolute -inset-[2px] opacity-20 group-hover/glow:opacity-80 transition-opacity duration-500"
      />
      <div className="group/animated-card relative h-full w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {children}
      </div>
    </div>
  )
}

export function CardBody({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5 border-t border-gray-200 p-5",
        className
      )}
      {...props}
    />
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-lg font-heading font-bold leading-snug tracking-tight text-brand-dark",
        className
      )}
      {...props}
    />
  )
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm font-body text-gray-500 leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export function CardVisual({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("h-[180px] w-full overflow-hidden", className)}
      {...props}
    />
  )
}

// ── Visual Components ──

interface VisualProps {
  mainColor?: string
  secondaryColor?: string
  gridColor?: string
}

export function Visual1({
  mainColor = "#ff5b01",
  secondaryColor = "#e86425",
  gridColor = "#80808015",
}: VisualProps) {
  return (
    <div aria-hidden className="relative h-full w-full overflow-hidden rounded-t-xl">
      <BarChart color={mainColor} secondaryColor={secondaryColor} />
      <LineChart color={mainColor} />
      <EllipseGradient color={mainColor} />
      <GridLayer color={gridColor} />
      <HoverOverlay />
    </div>
  )
}

function GridLayer({ color }: { color: string }) {
  return (
    <div
      style={{ "--grid-color": color } as React.CSSProperties}
      className="pointer-events-none absolute inset-0 z-[4] h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:20px_20px] bg-center opacity-70 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
    />
  )
}

function EllipseGradient({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 z-[5] flex h-full w-full items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 356 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="356" height="180" fill="url(#paint)" />
        <defs>
          <radialGradient id="paint" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(178 98) rotate(90) scale(98 178)">
            <stop stopColor={color} stopOpacity="0.25" />
            <stop offset="0.34" stopColor={color} stopOpacity="0.15" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

function BarChart({ color, secondaryColor }: { color: string; secondaryColor?: string }) {
  const bars = [
    { h: 22, c: color }, { h: 32, c: secondaryColor }, { h: 27, c: color }, { h: 47, c: secondaryColor },
    { h: 58, c: color }, { h: 42, c: secondaryColor }, { h: 67, c: color }, { h: 39, c: secondaryColor },
    { h: 50, c: color }, { h: 70, c: secondaryColor }, { h: 67, c: color }, { h: 45, c: secondaryColor },
    { h: 39, c: color }, { h: 56, c: secondaryColor }, { h: 74, c: color }, { h: 58, c: secondaryColor },
    { h: 75, c: color }, { h: 63, c: secondaryColor }, { h: 92, c: color }, { h: 84, c: secondaryColor },
    { h: 113, c: color }, { h: 108, c: secondaryColor }, { h: 133, c: color }, { h: 144, c: secondaryColor },
  ]

  return (
    <div className="ease-[cubic-bezier(0.6,0.6,0,1)] absolute bottom-0 left-0 z-[6] flex items-end gap-[5px] px-2 transform transition-transform duration-500 group-hover/animated-card:translate-x-[-50%]">
      {bars.map((bar, i) => (
        <div
          key={i}
          className="w-[14px] rounded-t-sm"
          style={{ height: bar.h, backgroundColor: bar.c || color }}
        />
      ))}
    </div>
  )
}

function LineChart({ color }: { color: string }) {
  return (
    <div className="absolute top-0 left-0 h-full w-full">
      <svg className="h-full w-full" viewBox="0 0 356 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clipLine)">
          <path
            d="M1 131.5L33.5 125.5L64 102.5L93.5 118.5L124.5 90L154 100.5L183.5 76L207.5 92L244.5 51L274.5 60.5L307.5 46L334.5 28.5L356.5 1"
            stroke={color}
          />
          <path
            d="M33.5 125.5L1 131.5V197H356.5V1L335 28.5L306.5 46L274.5 60.5L244.5 51L207.5 92L183.5 76L154 100.5L124.5 90L93.5 118.5L64 102.5L33.5 125.5Z"
            fill={color}
            fillOpacity="0.3"
          />
        </g>
        <defs>
          <clipPath id="clipLine">
            <rect width="356" height="180" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="ease-[cubic-bezier(0.6,0.6,0,1)] absolute inset-0 z-[3] transform bg-gradient-to-r from-transparent from-0% to-white to-15% transition-transform duration-500 group-hover/animated-card:translate-x-full" />
    </div>
  )
}

function HoverOverlay() {
  return (
    <div className="group relative h-full w-full">
      <div className="ease-[cubic-bezier(0.6,0.6,0,1)] absolute inset-0 z-[7] flex max-w-full -translate-y-full items-start justify-start bg-transparent p-4 transition-transform duration-500 group-hover/animated-card:translate-y-0">
        <div className="ease-[cubic-bezier(0.6,0.6,0,1)] rounded-lg border border-gray-200 bg-white/80 p-3 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover/animated-card:opacity-100">
          <p className="mb-1 text-xs font-heading font-bold text-brand-dark">Leistungsdaten</p>
          <p className="text-xs font-body text-gray-500">Hover für Details</p>
        </div>
      </div>
    </div>
  )
}
