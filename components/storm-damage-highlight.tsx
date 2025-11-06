import { AlertTriangle, ArrowRight, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { AnimatedElement } from "./animated-element"
import { TouchRipple } from "./touch-ripple"

export default function StormDamageHighlight() {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-lg">
      <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-destructive/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 -mb-8 -ml-8 bg-destructive/20 rounded-full blur-3xl"></div>

      {/* Mobile layout (stacked) */}
      <div className="block sm:hidden">
        <div className="p-6">
          <AnimatedElement animation="fade-in" duration={0.5}>
            <Badge variant="destructive" className="mb-4">
              Emergency Response
            </Badge>
          </AnimatedElement>

          <AnimatedElement animation="slide-in-up" delay={0.1} duration={0.5}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">24/7 Storm Damage Restoration</h3>
          </AnimatedElement>

          <AnimatedElement animation="scale-in" delay={0.2} duration={0.6}>
            {/* Fixed image container with proper margins */}
            <div className="relative w-full h-[200px] mb-6 rounded-lg overflow-hidden">
              <Image
                src="/storm-damaged-roof-tarping.png"
                alt="Emergency storm damage response"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={0.3} duration={0.5}>
            <p className="text-foreground/90 mb-6">
              When severe weather strikes, immediate action is crucial. Our rapid response team is ready 24/7 to secure
              your property and begin the restoration process.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide-in-up" delay={0.4} duration={0.5}>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-2 bg-background/50 p-2 rounded-md">
                <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Immediate Response</h4>
                  <p className="text-sm text-foreground/80">On-site within hours</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-background/50 p-2 rounded-md">
                <Clock className="h-5 w-5 text-destructive mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">24/7 Availability</h4>
                  <p className="text-sm text-foreground/80">Always ready to help</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-background/50 p-2 rounded-md">
                <Shield className="h-5 w-5 text-destructive mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Insurance Experts</h4>
                  <p className="text-sm text-foreground/80">Maximize your claim</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-background/50 p-2 rounded-md">
                <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Complete Restoration</h4>
                  <p className="text-sm text-foreground/80">From tarping to rebuild</p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-in-up" delay={0.5} duration={0.5}>
            <div className="flex flex-col gap-3">
              <TouchRipple color="rgba(255, 255, 255, 0.3)">
                <Button
                  asChild
                  className="bg-destructive hover:bg-destructive/90 active:scale-[0.98] transition-transform font-medium"
                >
                  <Link href="/services/storm-damage">
                    Emergency Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </TouchRipple>

              <TouchRipple color="rgba(239, 68, 68, 0.2)">
                <Button
                  asChild
                  variant="outline"
                  className="border-destructive/50 text-destructive hover:bg-destructive/5 active:scale-[0.98] transition-transform font-medium"
                >
                  <a href="tel:1-800-737-8673">Call 1-800-RESTORE</a>
                </Button>
              </TouchRipple>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Tablet-specific layout (optimized for tablets) */}
      <div className="hidden sm:block md:hidden">
        <div className="p-6">
          <AnimatedElement animation="fade-in" duration={0.5}>
            <Badge variant="destructive" className="mb-4">
              Emergency Response
            </Badge>
          </AnimatedElement>

          <AnimatedElement animation="slide-in-up" delay={0.1} duration={0.5}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">24/7 Storm Damage Restoration</h3>
          </AnimatedElement>

          <div className="flex flex-row gap-6 mb-6">
            <AnimatedElement animation="slide-in-left" delay={0.2} duration={0.6} className="w-1/2">
              <p className="text-foreground/90 mb-6">
                When severe weather strikes, immediate action is crucial. Our rapid response team is ready 24/7 to
                secure your property and begin the restoration process.
              </p>

              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="flex items-start gap-2 tablet-hover-lift bg-background/50 p-2 rounded-md">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Immediate Response</h4>
                    <p className="text-sm text-foreground/80">On-site within hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 tablet-hover-lift bg-background/50 p-2 rounded-md">
                  <Clock className="h-5 w-5 text-destructive mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">24/7 Availability</h4>
                    <p className="text-sm text-foreground/80">Always ready to help</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-in-right" delay={0.3} duration={0.6} className="w-1/2">
              {/* Fixed image container with proper margins */}
              <div className="relative rounded-lg overflow-hidden tablet-card-hover">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/storm-damaged-roof-tarping.png"
                    alt="Emergency storm damage response"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(min-width: 640px) and (max-width: 1023px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-8">
                  <div className="p-3 text-white">
                    <p className="font-bold text-sm">Rapid emergency response to secure your property</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement animation="slide-in-up" delay={0.4} duration={0.5}>
            <div className="flex flex-row gap-4 mb-6">
              <div className="flex items-start gap-2 tablet-hover-lift bg-background/50 p-2 rounded-md flex-1">
                <Shield className="h-5 w-5 text-destructive mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Insurance Experts</h4>
                  <p className="text-sm text-foreground/80">Maximize your claim</p>
                </div>
              </div>
              <div className="flex items-start gap-2 tablet-hover-lift bg-background/50 p-2 rounded-md flex-1">
                <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Complete Restoration</h4>
                  <p className="text-sm text-foreground/80">From tarping to rebuild</p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slide-in-up" delay={0.5} duration={0.5}>
            <div className="flex flex-row gap-3">
              <TouchRipple color="rgba(255, 255, 255, 0.3)">
                <Button
                  asChild
                  className="bg-destructive hover:bg-destructive/90 active:scale-[0.98] transition-transform font-medium"
                >
                  <Link href="/services/storm-damage">
                    Emergency Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </TouchRipple>

              <TouchRipple color="rgba(239, 68, 68, 0.2)">
                <Button
                  asChild
                  variant="outline"
                  className="border-destructive/50 text-destructive hover:bg-destructive/5 active:scale-[0.98] transition-transform font-medium"
                >
                  <a href="tel:1-800-737-8673">Call 1-800-RESTORE</a>
                </Button>
              </TouchRipple>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Desktop layout (side by side) */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-6 p-6">
          <div>
            <AnimatedElement animation="fade-in" duration={0.5}>
              <Badge variant="destructive" className="mb-4">
                Emergency Response
              </Badge>
            </AnimatedElement>

            <AnimatedElement animation="slide-in-up" delay={0.1} duration={0.5}>
              <h3 className="text-2xl font-bold mb-4 text-foreground">24/7 Storm Damage Restoration</h3>
            </AnimatedElement>

            <AnimatedElement animation="fade-in" delay={0.2} duration={0.5}>
              <p className="text-foreground/90 mb-6">
                When severe weather strikes, immediate action is crucial. Our rapid response team is ready 24/7 to
                secure your property and begin the restoration process.
              </p>
            </AnimatedElement>

            <AnimatedElement animation="slide-in-up" delay={0.3} duration={0.5}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2 bg-background/50 p-2 rounded-md">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Immediate Response</h4>
                    <p className="text-sm text-foreground/80">On-site within hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-background/50 p-2 rounded-md">
                  <Clock className="h-5 w-5 text-destructive mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">24/7 Availability</h4>
                    <p className="text-sm text-foreground/80">Always ready to help</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-background/50 p-2 rounded-md">
                  <Shield className="h-5 w-5 text-destructive mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Insurance Experts</h4>
                    <p className="text-sm text-foreground/80">Maximize your claim</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-background/50 p-2 rounded-md">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Complete Restoration</h4>
                    <p className="text-sm text-foreground/80">From tarping to rebuild</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slide-in-up" delay={0.4} duration={0.5}>
              <div className="flex flex-row gap-3">
                <Button asChild className="bg-destructive hover:bg-destructive/90 font-medium">
                  <Link href="/services/storm-damage">
                    Emergency Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-destructive/50 text-destructive hover:bg-destructive/5 font-medium"
                >
                  <a href="tel:1-800-737-8673">Call 1-800-RESTORE</a>
                </Button>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement animation="slide-in-right" delay={0.3} duration={0.7}>
            {/* Fixed image container with proper margins */}
            <div className="relative rounded-lg overflow-hidden h-full">
              <Image
                src="/storm-damaged-roof-tarping.png"
                alt="Emergency storm damage response"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <p className="font-bold text-white text-shadow-sm">
                    Rapid emergency response to secure your property
                  </p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  )
}
