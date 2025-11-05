import { Sparkles } from "lucide-react"

interface DamageAnalysisResultProps {
  result: {
    severity: "low" | "medium" | "high"
    severityScore: number
    details: string
    recommendations: string
    timestamp: string
  }
  isLoading?: boolean
}

export default function DamageAnalysisResult({ result, isLoading = false }: DamageAnalysisResultProps) {
  if (isLoading) {
    return (
      <div className="space-y-2 animate-pulse">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <div className="h-4 w-24 bg-muted rounded"></div>
        </div>
        <div className="h-4 w-full bg-muted rounded"></div>
        <div className="h-4 w-3/4 bg-muted rounded"></div>
        <div className="h-4 w-5/6 bg-muted rounded"></div>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">AI Analysis</span>
        </div>
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
            result.severity === "high"
              ? "bg-red-100 text-red-800"
              : result.severity === "medium"
                ? "bg-amber-100 text-amber-800"
                : "bg-green-100 text-green-800"
          }`}
        >
          {result.severity === "high" ? "High" : result.severity === "medium" ? "Medium" : "Low"} Severity
        </span>
      </div>
      <p className="text-sm">{result.details}</p>
      <p className="text-sm font-medium text-primary">{result.recommendations}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Score: {result.severityScore}/10</span>
        <span className="text-xs text-muted-foreground">{new Date(result.timestamp).toLocaleString()}</span>
      </div>
    </div>
  )
}
