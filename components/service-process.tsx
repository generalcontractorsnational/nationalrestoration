import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProcessStep {
  title: string
  description: string
  icon: React.ReactNode
}

interface ServiceProcessProps {
  steps: ProcessStep[]
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <div className="relative">
      {/* Connecting line */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-[calc(100%-100px)] bg-muted-foreground/20 hidden md:block"></div>

      <div className="grid grid-cols-1 gap-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-4 md:gap-8 relative">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 z-10 md:ml-[calc(50%-32px)]">
              {step.icon}
            </div>
            <Card className="w-full md:w-1/2 md:ml-auto">
              <CardHeader className="pb-2">
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
