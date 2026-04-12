"use client"

import { GrainGradient } from "@paper-design/shaders-react"

interface GradientBackgroundProps {
  colors?: string[]
  colorBack?: string
  softness?: number
  intensity?: number
  speed?: number
}

export function GradientBackground({
  colors = ["hsl(14, 100%, 50%)", "hsl(25, 100%, 52%)", "hsl(35, 100%, 55%)"],
  colorBack = "hsl(14, 100%, 40%)",
  softness = 0.76,
  intensity = 0.45,
  speed = 0.8,
}: GradientBackgroundProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack={colorBack}
        softness={softness}
        intensity={intensity}
        noise={0.04}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={speed}
        colors={colors}
      />
    </div>
  )
}
