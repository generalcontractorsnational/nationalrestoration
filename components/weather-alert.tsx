import { Cloud, CloudRain, Wind } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WeatherAlert() {
  return (
    <Card className="border-destructive bg-destructive/5 shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <CloudRain className="h-5 w-5 text-destructive" />
          <CardTitle className="text-destructive">Storm Season Alert</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Storm season is here. Protect your property before damage occurs or get immediate help if you've already
          experienced storm damage.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-destructive" />
            <span className="text-sm">Wind Damage</span>
          </div>
          <div className="flex items-center gap-2">
            <CloudRain className="h-4 w-4 text-destructive" />
            <span className="text-sm">Hail Damage</span>
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="h-4 w-4 text-destructive" />
            <span className="text-sm">Water Intrusion</span>
          </div>
        </div>
        <Button asChild className="w-full bg-destructive hover:bg-destructive/90">
          <Link href="/services/storm-damage">Get Emergency Help</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
