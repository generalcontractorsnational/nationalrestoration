import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, Zap, Brain, Users, Trophy, Briefcase, TrendingUp, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Work With Us - Careers | National Builders Corporation",
  description:
    "Join National Builders Corporation and build your future. Commission-only sales roles with unlimited earning potential in storm restoration and exterior services.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/construction-team-in-field-with-hard-hats-trucks-a"
          alt="National Builders team in the field"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Join the Team. Build the Future.</h1>
          <p className="text-xl md:text-2xl mb-8 text-balance">
            Unlimited income potential. Real impact. Work that matters.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="#apply">Apply Now</a>
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Where Ambition Meets Opportunity</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At National Builders Corporation, success starts with the people who make it happen. We're not just
              restoring homes — we're rebuilding lives, strengthening communities, and helping property owners recover
              from storm damage with confidence and trust.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Our team is expanding fast, and we're looking for driven, motivated, and entrepreneurial professionals who
              want to grow with a company that rewards performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              If you thrive in a fast-paced environment, are passionate about helping others, and want unlimited earning
              potential, you belong here.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With National Builders */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Work With National Builders</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader className="pb-3">
                <DollarSign className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Commission-Only, High-Earning Sales Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Top performers regularly exceed six figures with no income cap.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Fast-Growing Industry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Storm restoration and exterior services are in constant demand.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Brain className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Training & Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Whether you're new or experienced, we'll train you to close deals confidently.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Team Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional, high-energy, and supportive — no corporate fluff, no red tape.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Trophy className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Real Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Your success depends on your effort, not your seniority.</p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-3">
                <Briefcase className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Trusted Brand</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Represent a trusted brand in roofing, siding, exteriors, and storm restoration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Images Gallery */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/sales-team-meeting-training-session-professional-o" alt="Team training session" fill className="object-cover" />
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/construction-workers-on-roof-installing-shingles-t" alt="Team working on roof" fill className="object-cover" />
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/successful-sales-rep-with-client-handshake-profess" alt="Successful deal closing" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Open Positions */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Core Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Storm Restoration Sales Representative */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <span className="text-xs font-semibold bg-primary text-primary-foreground px-2 py-1 rounded">
                    HOT ROLE
                  </span>
                </div>
                <CardTitle className="text-2xl">Storm Restoration Sales Representative</CardTitle>
                <CardDescription className="text-base">Commission Only</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  If you're hungry, competitive, and thrive on closing deals, this is your lane. You'll generate leads,
                  meet homeowners, assess storm damage, and guide clients through insurance-approved restorations.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Pay:</span> 100% Commission (Top performers earn $100K–$250K+)
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Locations:</span> Multiple territories across the region
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Schedule:</span> Flexible / Self-Managed
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sales Manager / Team Leader */}
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-2xl">Sales Manager / Team Leader</CardTitle>
                <CardDescription className="text-base">Commission + Overrides / Bonuses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Lead and mentor a team of restoration sales reps while continuing to sell. Perfect for experienced
                  closers ready to level up into leadership.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Pay:</span> Commission + Overrides / Bonuses
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Locations:</span> Regional
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Administrator / Customer Success */}
            <Card>
              <CardHeader>
                <Briefcase className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-2xl">Office Administrator / Customer Success</CardTitle>
                <CardDescription className="text-base">Hourly + Bonus Opportunities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Coordinate inspections, handle client paperwork, and support the production team. Excellent
                  communication and organization skills required.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Pay:</span> Hourly + Bonus Opportunities
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Location:</span> Office HQ
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Production Coordinator */}
            <Card>
              <CardHeader>
                <Trophy className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-2xl">Production Coordinator</CardTitle>
                <CardDescription className="text-base">Salary + Performance Bonus</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Oversee project scheduling, permits, and material orders. Interface between sales and installation
                  crews to ensure smooth delivery.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Pay:</span> Salary + Performance Bonus
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Location:</span> Office HQ
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            Additional roles may be added as we grow — check back often or submit a general application below!
          </p>
        </div>
      </section>

      {/* More Team Images */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
            <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/team-celebrating-success-high-five-office-environm" alt="Team celebrating success" fill className="object-cover" />
            </div>
            <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/branded-trucks-fleet-national-builders-equipment" alt="Company fleet" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Our Culture</h2>
            <p className="text-lg text-center text-muted-foreground mb-8 leading-relaxed">
              We're not a "clock-in and out" company. We're a performance-driven organization that rewards hustle,
              accountability, and integrity. You'll find teammates who push you to win, leadership that invests in your
              growth, and an environment where effort equals opportunity.
            </p>

            {/* Testimonial */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <blockquote className="text-lg md:text-xl italic mb-4">
                  "I made more money in my first 6 months here than I ever did in 3 years at my old sales job — because
                  I finally had a company that backed me up."
                </blockquote>
                <p className="font-semibold">— Tyler M., Senior Restoration Sales Rep</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Culture Images */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="relative h-48 overflow-hidden rounded-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/team-meeting-collaboration-whiteboard-planning" alt="Team collaboration" fill className="object-cover" />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/sales-training-presentation-professional-developme" alt="Sales training" fill className="object-cover" />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/field-work-storm-damage-assessment-professional" alt="Field assessment" fill className="object-cover" />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/team-lunch-celebration-company-culture" alt="Team celebration" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How to Join the Team */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">How to Join the Team</h2>
            <p className="text-lg text-center text-muted-foreground mb-10">
              It's easy to get started — and there's no limit to where you can go.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-2">
                    1
                  </div>
                  <CardTitle>Apply Online</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Use our quick application form below to tell us about yourself. We'll review your information and
                    reach out if your background aligns with our current openings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-2">
                    2
                  </div>
                  <CardTitle>Connect with Our Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If selected, you'll be contacted by one of our recruiters for a short intro call and interview.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-2">
                    3
                  </div>
                  <CardTitle>Start Building Your Career</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Once you're in, you'll get hands-on training, leads, marketing materials, and full operational
                    support — everything you need to succeed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Images */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/successful-sales-rep-with-commission-check-celebra" alt="Success celebration" fill className="object-cover" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/new-employee-orientation-training-welcome" alt="New employee training" fill className="object-cover" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/team-awards-ceremony-recognition-achievement" alt="Awards ceremony" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Join a Team That Wins */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join a Team That Wins</h2>
            <p className="text-lg mb-6 leading-relaxed">
              At National Builders, we believe every storm creates opportunity — and every opportunity rewards the bold.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              If you're motivated by freedom, financial growth, and purpose, this is where you can build the life you
              want.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <a href="#apply">Apply Today</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Team – Apply Now</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll be in touch with next steps.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input id="state" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Role Interested In *</Label>
                    <Select>
                      <SelectTrigger id="position">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales-rep">Storm Restoration Sales Representative</SelectItem>
                        <SelectItem value="sales-manager">Sales Manager / Team Leader</SelectItem>
                        <SelectItem value="office-admin">Office Administrator / Customer Success</SelectItem>
                        <SelectItem value="production">Production Coordinator</SelectItem>
                        <SelectItem value="other">Other / General Application</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Sales Experience (Brief Description)</Label>
                    <Textarea
                      id="experience"
                      placeholder="Tell us about your sales background, achievements, or relevant experience..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume / CV (Optional)</Label>
                    <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
                    <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea id="message" placeholder="Anything else you'd like us to know about you..." rows={3} />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Want to learn more about what it's like to work here? Follow us on social media for behind-the-scenes
              stories, success highlights, and upcoming hiring events.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Team Image */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative h-96 max-w-6xl mx-auto overflow-hidden rounded-lg">
            <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/entire-team-group-photo-professional-successful-di" alt="National Builders team" fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  )
}
