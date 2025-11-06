import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"
import FAQSchema from "@/components/faq-schema"
import BreadcrumbSchema from "@/components/breadcrumb-schema"
import { getWebPageSchema } from "@/lib/schema"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, CreditCard, DollarSign, FileText, Percent, ShieldCheck } from "lucide-react"

export const metadata = {
  title: "Financing Options | National Restoration",
  description:
    "Flexible payment solutions to make your restoration project affordable. Explore our financing options for homeowners and businesses.",
}

export default function FinancingPage() {
  // FAQs for schema
  const faqs = [
    {
      question: "How does the application process work?",
      answer:
        "Our application process is simple and secure. You can apply online or over the phone. We'll need basic information like your name, address, and income details. Most applications receive an instant decision. Once approved, we can begin your restoration project right away.",
    },
    {
      question: "What credit score do I need to qualify?",
      answer:
        "Credit score requirements vary by financing option. Our GreenSky® financing typically requires a score of 640+, while Hearth offers options for scores as low as 580. We have financing solutions for most credit situations, and our team can help you find the best option for your specific circumstances.",
    },
    {
      question: "Are there any fees or prepayment penalties?",
      answer:
        "Most of our financing options have no application fees or prepayment penalties. This means you can pay off your loan early without additional costs if your financial situation changes. Some options may have origination fees, which will be clearly disclosed before you accept the financing.",
    },
    {
      question: "How long does it take to get approved?",
      answer:
        "Many of our financing options offer instant decisions. For more complex commercial financing, approval may take 1-3 business days. Once approved, funds are typically available within 1-5 business days, depending on the financing option you choose.",
    },
    {
      question: "Can I finance my insurance deductible?",
      answer:
        "Yes, we offer special financing options specifically for insurance deductibles. This can help you manage out-of-pocket costs for insurance-covered restoration projects. Our team can explain these options and help you determine if deductible financing is right for your situation.",
    },
    {
      question: "What's the difference between promotional financing and regular financing?",
      answer:
        "Promotional financing offers special terms like 0% interest if paid in full during a promotional period (typically 6-18 months). Regular financing features fixed monthly payments over a set term with a standard interest rate. Promotional financing can save you money if paid off during the promotional period, while regular financing provides predictable payments over a longer term.",
    },
  ]

  // Breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: "https://nationalrestoration.com/" },
    { name: "Financing", url: "https://nationalrestoration.com/financing/" },
  ]

  // Generate webpage schema
  const webpageSchema = {
    "@context": "https://schema.org",
    ...getWebPageSchema(
      "Financing Options | National Restoration",
      "https://nationalrestoration.com/financing/",
      "Flexible payment solutions to make your restoration project affordable. Explore our financing options for homeowners and businesses.",
      "https://nationalrestoration.com/financing-header-image.png",
    ),
  }

  return (
    <main className="min-h-screen">
      {/* Add schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <PageHeader
        title="Financing Options"
        description="Flexible payment solutions to make your restoration project affordable"
        backgroundImage="/financing-header-image.png"
      />

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Affordable Restoration Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At National Restoration, we understand that home and commercial restoration projects are often
                unexpected expenses. That's why we've partnered with leading financial institutions to offer flexible
                financing options that make essential restoration work affordable for every budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="#financing-options">View Financing Options</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/family-discussing-finances.png"
                alt="Family discussing financing options"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Finance */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Finance Your Restoration Project?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Financing your restoration project offers several advantages that can help you manage costs while ensuring
              your property receives the care it needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Preserve Your Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Keep your emergency funds intact while still addressing urgent restoration needs. Spread the cost over
                  time rather than depleting your savings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <ShieldCheck className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Address Issues Immediately</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Don't delay necessary repairs that could lead to more extensive damage. Financing allows you to take
                  action now and prevent further deterioration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Percent className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Competitive Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our financing partners offer competitive interest rates, often lower than credit cards, making your
                  restoration project more affordable in the long run.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CreditCard className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Flexible Payment Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Choose from various term lengths and payment structures to find a plan that fits your monthly budget
                  and financial situation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Simple Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our streamlined application process makes it easy to apply and receive a decision quickly, often
                  within minutes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>No Prepayment Penalties</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Pay off your loan early without additional fees if your financial situation changes, giving you
                  complete flexibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section id="financing-options" className="py-12 md:py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Financing Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer multiple financing options to accommodate different needs and credit situations. Explore our
              partners and programs below.
            </p>
          </div>

          <Tabs defaultValue="homeowner" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="homeowner">Homeowner Financing</TabsTrigger>
              <TabsTrigger value="commercial">Commercial Financing</TabsTrigger>
            </TabsList>

            <TabsContent value="homeowner" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-primary">
                  <CardHeader className="bg-primary text-primary-foreground">
                    <CardTitle>GreenSky® Financing</CardTitle>
                    <CardDescription className="text-primary-foreground/90">
                      Flexible payment options for homeowners
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>0% interest if paid in full during promotional period</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Credit limits up to $65,000</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Quick, paperless application process</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>No prepayment penalties</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Fixed monthly payments</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button className="w-full">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Hearth Financing</CardTitle>
                    <CardDescription>Multiple loan options from various lenders</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Compare rates from multiple lenders</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Loans from $1,000 to $100,000</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Terms from 2-12 years</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Pre-qualification with no impact to credit score</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Funding as soon as 24 hours</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button variant="outline" className="w-full">
                        Check Your Rate
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>FHA Title I Loans</CardTitle>
                    <CardDescription>Government-backed home improvement loans</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Loans up to $25,000 for single-family homes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Fixed interest rates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Terms up to 20 years</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>No home equity required</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Ideal for necessary home improvements</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Additional Homeowner Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Home Equity Loans</h4>
                    <p className="text-muted-foreground mb-4">
                      Use the equity in your home to finance your restoration project with potentially tax-deductible
                      interest.
                    </p>
                    <Button variant="link" className="p-0">
                      Learn About Home Equity Options →
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Insurance Deductible Financing</h4>
                    <p className="text-muted-foreground mb-4">
                      If your project is insurance-related, we offer special financing options to cover your deductible.
                    </p>
                    <Button variant="link" className="p-0">
                      Explore Deductible Financing →
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Commercial Lending</CardTitle>
                    <CardDescription>Tailored financing for business properties</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Financing up to $1 million</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Competitive interest rates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Terms up to 10 years</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Quick approval process</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Minimal documentation required</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button className="w-full">Request Information</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>SBA 504 Loans</CardTitle>
                    <CardDescription>Government-backed loans for commercial property improvements</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Below-market, fixed interest rates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>10-20 year terms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Low down payment (10-15%)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Ideal for major renovation projects</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Can be used for building improvements</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Equipment Financing</CardTitle>
                    <CardDescription>Specialized financing for commercial equipment</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>100% financing available</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Terms up to 7 years</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Fixed monthly payments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Potential tax benefits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>Preserves working capital</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button variant="outline" className="w-full">
                        Request Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Additional Commercial Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Commercial Line of Credit</h4>
                    <p className="text-muted-foreground mb-4">
                      Flexible funding option that allows you to draw funds as needed for ongoing maintenance and
                      unexpected repairs.
                    </p>
                    <Button variant="link" className="p-0">
                      Learn About Commercial Lines of Credit →
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Custom Financing Solutions</h4>
                    <p className="text-muted-foreground mb-4">
                      Our commercial financing specialists can create custom solutions for large-scale or complex
                      restoration projects.
                    </p>
                    <Button variant="link" className="p-0">
                      Contact a Specialist →
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Application Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Getting financing for your restoration project is quick and easy with our streamlined process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
              <p className="text-muted-foreground">
                Complete our simple online application in just a few minutes. You'll need basic personal and financial
                information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Receive Decision</h3>
              <p className="text-muted-foreground">
                Get a decision quickly, often within minutes. Our financing partners use secure technology to review
                your application.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
              <p className="text-muted-foreground">
                Once approved, we can begin your restoration project right away. Funds are typically disbursed directly
                to National Restoration.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from homeowners and business owners who used our financing options to complete their restoration
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image src="/homeowner-testimonial-1.png" alt="Sarah Johnson" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Homeowner in Los Angeles</p>
                  </div>
                </div>
                <p className="italic mb-4">
                  "After a major storm damaged our roof, we were worried about how to pay for repairs. The 0% financing
                  option made it possible to get the work done immediately without financial stress."
                </p>
                <div className="flex text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/business-owner-testimonial.png"
                      alt="Michael Rodriguez"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Michael Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">Business Owner in Dallas</p>
                  </div>
                </div>
                <p className="italic mb-4">
                  "The commercial financing option allowed us to upgrade our entire building exterior without impacting
                  our operational budget. The application was simple and approval was fast."
                </p>
                <div className="flex text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image src="/homeowner-testimonial-2.png" alt="David and Lisa Chen" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">David & Lisa Chen</h3>
                    <p className="text-sm text-muted-foreground">Homeowners in Columbus</p>
                  </div>
                </div>
                <p className="italic mb-4">
                  "We needed to replace our siding and windows but didn't want to deplete our savings. The monthly
                  payment plan was perfect for our budget and the interest rate was much better than our credit card."
                </p>
                <div className="flex text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our financing options.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does the application process work?</AccordionTrigger>
                <AccordionContent>
                  Our application process is simple and secure. You can apply online or over the phone. We'll need basic
                  information like your name, address, and income details. Most applications receive an instant
                  decision. Once approved, we can begin your restoration project right away.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What credit score do I need to qualify?</AccordionTrigger>
                <AccordionContent>
                  Credit score requirements vary by financing option. Our GreenSky® financing typically requires a score
                  of 640+, while Hearth offers options for scores as low as 580. We have financing solutions for most
                  credit situations, and our team can help you find the best option for your specific circumstances.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Are there any fees or prepayment penalties?</AccordionTrigger>
                <AccordionContent>
                  Most of our financing options have no application fees or prepayment penalties. This means you can pay
                  off your loan early without additional costs if your financial situation changes. Some options may
                  have origination fees, which will be clearly disclosed before you accept the financing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How long does it take to get approved?</AccordionTrigger>
                <AccordionContent>
                  Many of our financing options offer instant decisions. For more complex commercial financing, approval
                  may take 1-3 business days. Once approved, funds are typically available within 1-5 business days,
                  depending on the financing option you choose.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Can I finance my insurance deductible?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer special financing options specifically for insurance deductibles. This can help you
                  manage out-of-pocket costs for insurance-covered restoration projects. Our team can explain these
                  options and help you determine if deductible financing is right for your situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  What's the difference between promotional financing and regular financing?
                </AccordionTrigger>
                <AccordionContent>
                  Promotional financing offers special terms like 0% interest if paid in full during a promotional
                  period (typically 6-18 months). Regular financing features fixed monthly payments over a set term with
                  a standard interest rate. Promotional financing can save you money if paid off during the promotional
                  period, while regular financing provides predictable payments over a longer term.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Get Started?"
        description="Our financing specialists are ready to help you find the perfect payment solution for your restoration project."
        buttonText="Apply for Financing"
        buttonLink="/contact"
      />
    </main>
  )
}
