"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  CreditCard,
  Shield,
  Phone,
  Hammer,
  Users,
  Award,
  TrendingUp,
  DollarSign,
  ClipboardCheckIcon,
  FileText,
  Handshake,
  CheckCircle2,
  Clock,
  RotateCw,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react" // Keep this import from existing code

const processSteps = [
  {
    number: 1,
    title: "Free Damage Inspection & Consultation",
    icon: ClipboardCheckIcon,
    description:
      "Our process begins with a comprehensive home inspection at no cost to you. One of our experienced specialists will assess your property for storm damage, leaks, or other issues related to the recent event (e.g. hail, wind, or water damage).",
    details: [
      "We'll document all the damage with photos and detailed notes",
      "After the inspection, we sit down with you to explain the findings in plain language",
      "This consultation is completely free and comes with no obligation to move forward until you're ready",
      "We discuss realistic timelines and answer all your questions about the restoration process",
      "Emergency response available 24/7 for urgent situations requiring immediate attention",
    ],
  },
  {
    number: 2,
    title: "Documentation & Claim Support",
    icon: FileText,
    description:
      "If you decide to proceed with an insurance claim, we help you prepare the necessary documentation. We have years of experience assisting homeowners with proper damage documentation for their insurance companies.",
    details: [
      "Professional Estimate: Our team prepares a thorough, itemized estimate using industry-standard software and pricing guidelines",
      "Documentation Support: We provide comprehensive documentation including photos, damage reports, and our repair estimate",
      "We assist with documentation and damage assessment to help your claim process go smoothly",
      "Our team ensures all damage is properly documented so your insurance company has a clear understanding of necessary repairs",
      "We focus on quality restoration work while you maintain direct communication with your insurance company",
    ],
  },
  {
    number: 3,
    title: "Meeting with Your Insurance Adjuster",
    icon: Handshake,
    description:
      "After your claim is filed, an insurance adjuster will evaluate the damage. Our team can be present during the inspection to ensure all damage is properly identified and documented.",
    details: [
      "On-Site Presence: Our project manager or lead technician can attend the adjuster's inspection at your request",
      "We'll walk through all damage areas identified in our initial inspection to ensure nothing is missed",
      "Damage Documentation: We provide technical expertise about the extent of repairs needed",
      "We focus on accurate damage assessment and quality restoration, not price negotiation or coverage decisions",
      "Professional Cooperation: Our experience working with insurance companies often helps streamline the approval process",
    ],
  },
  {
    number: 4,
    title: "Repair & Restoration Work",
    icon: Hammer,
    description:
      "Once the claim is approved, the real work begins – and we take care of everything. National Restoration is a fully licensed, bonded, and insured contractor, and we pride ourselves on top-quality workmanship.",
    details: [
      "Paperwork & Scheduling: We handle all necessary permits and schedule the work at a convenient time for you",
      "Quality Materials: We source high-quality materials that match or exceed the quality of what you had before",
      "Expert Crew: Our skilled crew arrives on time and treats your property with respect",
      "Efficiency and Safety: Most projects are completed in just a few days, following all OSHA guidelines and building codes",
      "No surprise costs – we perform all work within the budget of the insurance settlement",
    ],
  },
  {
    number: 5,
    title: "Completion, Walk-Through & Warranty",
    icon: CheckCircle2,
    description:
      "After we finish the repairs, we believe our job isn't done until you are completely satisfied. The final step of our process ensures your complete peace of mind.",
    details: [
      "Cleanup: We perform a thorough cleanup of the work site, removing all debris and leaving your property neat and safe",
      "Final Inspection & Walk-Through: Our project manager will do a detailed inspection and walk through every repair with you",
      "Paperwork Wrap-Up: We help you handle any remaining paperwork with your insurance",
      "Warranty & Peace of Mind: We provide manufacturer warranties on products and our own 5-year workmanship warranty",
      "10-year labor warranty on full roof replacements for long-term peace of mind",
    ],
  },
  {
    number: 6,
    title: "Ongoing Support & Follow-Up",
    icon: Phone,
    description:
      "Our relationship doesn't end when the project is complete. We're here for you long after the final inspection, ensuring your complete satisfaction and peace of mind.",
    details: [
      "Follow-Up Calls: We check in after completion to ensure everything is working perfectly",
      "Warranty Activation: All warranties are registered and documented for your records",
      "Maintenance Guidance: We provide tips and recommendations for maintaining your newly restored property",
      "Priority Service: As a valued customer, you receive priority scheduling for any future needs",
      "Lifetime Support: Our team is always available to answer questions or address any concerns",
    ],
  },
]

const keyBenefits = [
  {
    icon: DollarSign,
    title: "No Surprise Costs",
    description:
      "The only out-of-pocket cost for you is typically your policy deductible – the insurance covers the rest of the approved work.",
  },
  {
    icon: Clock,
    title: "Quality Repairs",
    description: "All work is completed by our licensed, bonded, and insured team using high-quality materials.",
  },
  {
    icon: Phone,
    title: "24/7 Emergency Response",
    description:
      "Our rapid response team is available around the clock to secure your property and begin restoration immediately.",
  },
]

function FlipCard({ step }: { step: (typeof processSteps)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const Icon = step.icon

  return (
    <div
      className="flip-card-container h-[320px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        {/* Front of card */}
        <div className="flip-card-front surface-elevated border border-border/40 rounded-xl p-5 shadow-md">
          <div className="flex flex-col h-full">
            <div className="flex items-start gap-3 mb-3">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border border-primary/10">
                  <span className="text-lg font-bold text-primary">{step.number}</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-primary flex items-center justify-center shadow-md">
                  <Icon className="h-3 w-3 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold mb-1 text-balance leading-tight">{step.title}</h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1">{step.description}</p>
            <div className="flex items-center justify-center gap-2 mt-3 text-xs text-primary font-medium">
              <RotateCw className="h-3 w-3" />
              <span>Hover or click for details</span>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="flip-card-back surface-elevated border border-primary/20 rounded-xl p-5 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-primary/20">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">{step.number}</span>
              </div>
              <h3 className="text-sm font-bold text-balance leading-tight">{step.title}</h3>
            </div>
            <div className="space-y-2 flex-1 overflow-y-auto custom-scrollbar">
              {step.details.map((detail, idx) => (
                <div key={idx} className="flex gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground/90 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flip-card-container {
          perspective: 1000px;
        }
        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card.flipped {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--primary) / 0.3);
          border-radius: 2px;
        }
      `}</style>
    </div>
  )
}

export default function ProcessClientPage() {
  const paymentOptions = [
    {
      id: "insurance",
      title: "Insurance Claims",
      icon: <Shield className="h-12 w-12" />,
      color: "from-blue-500 to-blue-600",
      description:
        "If your project is covered by insurance, we've got it handled. We coordinate payments directly with your insurer.",
      features: [
        "Direct insurance company coordination",
        "We handle all claim paperwork",
        "Meet with adjusters as your advocate",
        "Supplement claims when needed",
        "You pay only your deductible",
        "Work often starts before final payment",
        "No out-of-pocket beyond deductible",
        "Faster repairs without waiting",
      ],
      process: [
        {
          step: "Damage Assessment",
          description: "Comprehensive inspection and documentation of all damage with photos and detailed reports.",
        },
        {
          step: "Claim Filing Guidance",
          description:
            "We guide you through filing and provide your insurer with our contact information for direct coordination.",
        },
        {
          step: "Adjuster Meeting",
          description:
            "We meet with the insurance adjuster on-site, ensuring nothing gets missed and all damage is properly documented.",
        },
        {
          step: "Approval & Restoration",
          description:
            "Once approved, insurance pays for all damages. We handle payment processing and often start work before final checks arrive.",
        },
      ],
    },
    {
      id: "financing",
      title: "Homeowner Financing",
      icon: <CreditCard className="h-12 w-12" />,
      color: "from-green-500 to-green-600",
      description:
        "For projects not covered by insurance, we have financing partners ready to help make your project affordable.",
      features: [
        "0% interest or deferred payment plans",
        "Up to 24 months same-as-cash offers",
        "Low monthly payment options",
        "Quick and easy application process",
        "Subject to credit approval",
        "Get work done now, pay over time",
        "No financial strain",
        "Promotional deals available",
      ],
      process: [
        {
          step: "Project Consultation",
          description: "Discuss your project needs and explore financing options that work for your budget.",
        },
        {
          step: "Quick Application",
          description: "Our team walks you through a simple financing application with our trusted partners.",
        },
        {
          step: "Approval Decision",
          description: "Receive approval typically within 24-48 hours, with multiple plan options to choose from.",
        },
        {
          step: "Start Your Project",
          description: "Begin work immediately with convenient monthly payments that fit your budget.",
        },
      ],
    },
    {
      id: "retail",
      title: "Retail Projects & Direct Payment",
      icon: <DollarSign className="h-12 w-12" />,
      color: "from-amber-500 to-amber-600",
      description:
        "For projects not tied to insurance claims, we welcome direct retail clients with traditional payment methods.",
      features: [
        "Pay by check, credit card, or cash",
        "Same great service and quality",
        "Transparent pricing upfront",
        "No insurance involvement needed",
        "Flexible payment arrangements",
        "Promotional financing may apply",
        "Direct communication",
        "Faster project timelines",
      ],
      process: [
        {
          step: "Free Estimate",
          description: "Receive a detailed, transparent estimate for your project with no hidden fees.",
        },
        {
          step: "Payment Discussion",
          description: "We discuss all payment options upfront, including any promotional financing deals.",
        },
        {
          step: "Deposit & Scheduling",
          description: "Provide deposit to secure materials and schedule your project at your convenience.",
        },
        {
          step: "Completion & Final Payment",
          description: "Project completed to your satisfaction, with final payment processed upon approval.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10">
      <section className="relative py-6 md:py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-2 text-xs px-3 py-1 shadow-sm" variant="secondary">
              Our Process
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-balance bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text leading-tight">
              Our Streamlined Restoration Process
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-6 text-pretty max-w-3xl mx-auto leading-relaxed">
              At National Restoration, we make recovering from property damage easy and stress-free. Our proven process
              is designed to handle the heavy lifting for you – from the initial inspection all the way to final repairs
              – so you can get your home back to normal with minimal hassle and cost.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-6 max-w-4xl mx-auto">
              {keyBenefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card
                    key={index}
                    className="surface-elevated border-border/40 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group"
                  >
                    <CardContent className="p-5">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-primary/10 transition-all border border-primary/10">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2 text-base">{benefit.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-2">
              <Badge className="mb-2 text-xs shadow-sm">6 Simple Steps</Badge>
              <h2 className="text-xl md:text-2xl font-bold mb-1 text-balance">From Claim to Completion</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {processSteps.map((step) => {
                const Icon = step.icon
                return (
                  <Card
                    key={step.number}
                    className="surface-elevated border-border/40 hover:shadow-lg transition-all duration-300 group"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="relative flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border border-primary/10">
                            <span className="text-base font-bold text-primary">{step.number}</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-primary flex items-center justify-center shadow-md">
                            <Icon className="h-3 w-3 text-primary-foreground" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold mb-1 text-balance leading-tight">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">{step.description}</p>
                      <div className="space-y-1.5 mt-2 pt-2 border-t border-border/40">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex gap-2">
                            <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-foreground/80 leading-relaxed">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <Badge className="mb-2 text-xs shadow-sm">Flexible Solutions</Badge>
            <h2 className="text-xl md:text-2xl font-bold mb-1 text-balance">Flexible Payment & Financing Options</h2>
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              We believe everyone should have access to quality restoration services. That's why we offer flexible
              payment and financing options to suit your situation.
            </p>
          </div>

          <Tabs defaultValue="insurance" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-transparent mb-4">
              {paymentOptions.map((option) => (
                <TabsTrigger
                  key={option.id}
                  value={option.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex flex-col items-center gap-1.5 py-3 px-2 h-auto rounded-xl border-2 data-[state=active]:border-primary data-[state=inactive]:border-border/40 hover:border-primary/50 transition-all surface-elevated data-[state=active]:shadow-lg"
                >
                  <div className="data-[state=active]:scale-105 transition-transform scale-75">{option.icon}</div>
                  <span className="font-semibold text-xs text-center">{option.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {paymentOptions.map((option) => (
              <TabsContent key={option.id} value={option.id} className="mt-3">
                <div className="grid lg:grid-cols-2 gap-3">
                  <Card className="surface-elevated border-border/40 shadow-md">
                    <CardContent className="p-3 md:p-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center text-white mb-3 shadow-lg scale-75`}
                      >
                        {option.icon}
                      </div>
                      <h3 className="text-base font-bold mb-1.5">{option.title}</h3>
                      <p className="text-muted-foreground mb-3 text-xs leading-relaxed">{option.description}</p>

                      <h4 className="font-semibold mb-2 flex items-center gap-2 text-xs">
                        <Award className="h-3.5 w-3.5 text-primary" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-1">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-xs leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="surface-elevated border-border/40 shadow-md">
                    <CardContent className="p-3 md:p-4">
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        How It Works
                      </h4>
                      <div className="space-y-2.5">
                        {option.process.map((step, idx) => (
                          <div key={idx} className="relative pl-7">
                            {idx < option.process.length - 1 && (
                              <div className="absolute left-2.5 top-6 bottom-0 w-px bg-gradient-to-b from-primary/50 to-primary/10" />
                            )}
                            <div className="absolute left-0 top-0.5 w-5 h-5 rounded-md bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center text-xs font-bold shadow-md">
                              {idx + 1}
                            </div>
                            <div>
                              <h5 className="font-semibold mb-0.5 text-xs">{step.step}</h5>
                              <p className="text-xs text-muted-foreground text-pretty leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 p-2.5 bg-primary/5 rounded-lg border border-primary/10">
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">Need help deciding?</strong> Our team is here to discuss
                          which payment option best fits your situation. Contact us for a personalized consultation.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-3">
              <Badge className="mb-2 text-xs shadow-sm">Our Commitment</Badge>
              <h2 className="text-xl md:text-2xl font-bold mb-1 text-balance">Why Homeowners Trust Us</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-2.5">
              <Card className="surface-elevated border-border/40 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-3 text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1 text-xs">Expert Team</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Certified professionals with years of experience in restoration and construction.
                  </p>
                </CardContent>
              </Card>

              <Card className="surface-elevated border-border/40 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-3 text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1 text-xs">Fully Insured</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Comprehensive insurance coverage protects you and your property throughout the project.
                  </p>
                </CardContent>
              </Card>

              <Card className="surface-elevated border-border/40 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-3 text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1 text-xs">Quality Guarantee</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We stand behind our work with comprehensive warranties and satisfaction guarantees.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <Card className="max-w-3xl mx-auto surface-glass border-border/40 shadow-xl">
            <CardContent className="p-5 md:p-6 text-center">
              <h2 className="text-lg md:text-xl font-bold mb-2 text-balance">
                Experience a Hassle-Free Restoration Today
              </h2>
              <p className="text-xs text-muted-foreground mb-2 text-pretty max-w-2xl mx-auto leading-relaxed">
                Dealing with property damage can be stressful, but with National Restoration on your side, the process
                is handled by experts from start to finish. Our goal is to protect your home, your rights as a
                policyholder, and your wallet by ensuring quality repairs are done under your insurance coverage.
              </p>
              <p className="text-xs text-muted-foreground mb-4 text-pretty max-w-2xl mx-auto leading-relaxed">
                Ready to get started? If you suspect your home has damage or you're in the middle of an insurance claim
                and don't know what to do next, contact us today for a free inspection and consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                <Button size="default" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                  <Link href="/free-inspection">
                    <Phone className="mr-2 h-4 w-4" />
                    Get Free Inspection
                  </Link>
                </Button>
                <Button
                  size="default"
                  variant="outline"
                  asChild
                  className="bg-background/50 hover:bg-background border-border/50"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
