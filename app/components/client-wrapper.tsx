"use client"

import dynamic from "next/dynamic"

// Dynamically import the SpeedInsights component with no SSR
const VercelSpeedInsights = dynamic(() => import("./speed-insights").then((mod) => mod.VercelSpeedInsights), {
  ssr: false,
})

export function ClientWrapper() {
  return <VercelSpeedInsights />
}
