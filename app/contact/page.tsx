import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Building, HomeIcon } from "lucide-react"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team for a free consultation"
        backgroundImage="/placeholder.svg?height=400&width=1920&query=customer service representative on phone"
      />

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4">Get In Touch</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We're Here to Help</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to start your restoration or construction project? Have questions about our services or want to
                schedule a free inspection and estimate? We're here to help. Getting in touch with National Restoration
                Services is easy.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-muted-foreground mb-1">Call us at:</p>
                    <p className="font-medium text-lg">1-800-RESTORE (1-800-737-8673)</p>
                    <p className="text-sm text-muted-foreground mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground mb-1">Send us a message at:</p>
                    <p className="font-medium">info@nationalrestoration.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We respond to all emails within one business day
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Office Hours</h3>
                    <p className="text-muted-foreground mb-1">Our regular business hours:</p>
                    <p className="font-medium">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-sm text-muted-foreground mt-1">Emergency services available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold text-xl mb-4">Regional Offices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Atlanta</p>
                      <p className="text-muted-foreground">Atlanta, Marietta, Alpharetta, and surrounding areas</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Washington D.C. Metro</p>
                      <p className="text-muted-foreground">D.C., Northern Virginia, Maryland</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Ohio</p>
                      <p className="text-muted-foreground">Cleveland, Columbus, and surrounding areas</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Dallas–Fort Worth</p>
                      <p className="text-muted-foreground">Serving the entire DFW Metroplex</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Get a Free Inspection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Emergency Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Emergency Response</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              When disaster strikes, we're ready to respond. Our emergency teams are available 24/7 to secure your
              property and prevent further damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <HomeIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Residential Emergencies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  From roof leaks to storm damage, we provide rapid response to protect your home and belongings.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Emergency roof tarping</li>
                  <li>• Water extraction</li>
                  <li>• Board-up services</li>
                  <li>• Temporary power solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Commercial Emergencies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We understand that time is money for businesses. Our commercial emergency response minimizes downtime.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Large-scale tarping</li>
                  <li>• Structural stabilization</li>
                  <li>• Security measures</li>
                  <li>• Business continuity support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">For emergency assistance, call our 24/7 emergency hotline:</p>
                <p className="text-xl font-bold text-primary mb-4">1-800-RESTORE</p>
                <p className="text-muted-foreground">
                  Please indicate that your situation is urgent, and we'll prioritize your call. Our goal is to be
                  on-site within hours to mitigate damage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>How soon can you start my project?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For emergency services, we aim to be on-site within hours. For standard projects, we typically
                  schedule work within 1-2 weeks of contract signing, depending on current workload and material
                  availability. We'll provide a specific timeline during your consultation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you work with insurance companies?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we have extensive experience working with insurance companies. We can help document damage,
                  provide detailed estimates, and work directly with your adjuster to ensure your claim is processed
                  smoothly and fairly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What warranties do you offer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer robust workmanship warranties on all our projects, typically 5-10 years depending on the
                  service. Additionally, the materials we install come with manufacturer warranties, many of which are
                  transferable if you sell your property.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer financing options?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we partner with reputable financing providers to offer a range of payment plans. Options include
                  deferred interest plans, low fixed APR plans, and longer-term loans. We can discuss these options
                  during your consultation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Are you licensed and insured?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. We are fully licensed and insured in every state and locality where we operate. We carry
                  comprehensive general liability insurance and workers' compensation coverage to protect both our
                  workers and your property.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How long will my project take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Project timelines vary based on scope and complexity. A typical roof replacement might take 1-3 days,
                  while a complete exterior renovation could take several weeks. We provide detailed timelines before
                  starting work and keep you updated throughout the process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Locations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us Nationwide</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With regional offices across the country, we're ready to serve you wherever you are.
            </p>
          </div>

          <div className="h-[500px] rounded-lg overflow-hidden bg-white">
            {/* This would be replaced with an actual map component in production */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
