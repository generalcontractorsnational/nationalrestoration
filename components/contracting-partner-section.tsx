import { cn } from "@/lib/utils"

interface ContractingPartnerSectionProps {
  className?: string
}

export function ContractingPartnerSection({ className }: ContractingPartnerSectionProps) {
  return (
    <div className={cn("relative p-6 md:p-8 rounded-lg bg-white shadow-md border border-gray-100", className)}>
      {/* Background with improved contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg" />

      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Your One-Stop Contracting Partner</h2>

        <p className="text-foreground text-base md:text-lg leading-relaxed">
          From roof to foundation, we keep your property in prime condition with comprehensive restoration services. We
          work directly with insurance companies to ensure your claims are handled smoothly.
        </p>
      </div>
    </div>
  )
}
