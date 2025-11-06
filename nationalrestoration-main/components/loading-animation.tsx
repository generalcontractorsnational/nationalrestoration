"use client"

import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface LoadingAnimationProps {
  size?: "small" | "medium" | "large"
  color?: string
  className?: string
}

export function LoadingAnimation({ size = "medium", color = "currentColor", className = "" }: LoadingAnimationProps) {
  const prefersReducedMotion = useReducedMotion()

  // Size mappings
  const sizeMap = {
    small: {
      width: "1.5rem",
      height: "1.5rem",
      strokeWidth: "3",
    },
    medium: {
      width: "2rem",
      height: "2rem",
      strokeWidth: "2.5",
    },
    large: {
      width: "2.5rem",
      height: "2.5rem",
      strokeWidth: "2",
    },
  }

  const { width, height, strokeWidth } = sizeMap[size]

  // For users who prefer reduced motion, use a simpler animation
  if (prefersReducedMotion) {
    return (
      <div className={`inline-flex items-center justify-center ${className}`} style={{ width, height }}>
        <div
          className="animate-pulse rounded-full"
          style={{
            width: `calc(${width} * 0.8)`,
            height: `calc(${height} * 0.8)`,
            backgroundColor: color,
            opacity: 0.7,
          }}
        />
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color }}>
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <path
          className="opacity-75"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          d="M12 2a10 10 0 0 1 10 10"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}
