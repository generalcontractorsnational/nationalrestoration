"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function InteractiveTestimonials() {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 4

  const testimonials = [
    {
      id: 1,
      name: "Mike R.",
      location: "Shaker Heights, OH",
      content:
        "These guys saved us after the storm last winter. Worked with insurance and got everything approved, even supplements we didn't know about. Whole thing was way easier than expected.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jennifer K.",
      location: "Silver Spring, MD",
      content:
        "Best experience ever! They handled all the insurance stuff and got our claim approved super fast. New siding looks amazing. Really know their stuff when it comes to working with insurance.",
      rating: 5,
    },
    {
      id: 3,
      name: "David M.",
      location: "Lakewood, OH",
      content:
        "needed new roof after storm damage, they did all the paperwork with insurance and even got supplements for stuff we didnt realize was covered. way better than i thought",
      rating: 5,
    },
    {
      id: 4,
      name: "Sarah T.",
      location: "Bethesda, MD",
      content:
        "Had water damage in basement and they fixed everything perfectly. Worked with our insurance company and got us a good settlement. You can't even tell there was damage now.",
      rating: 5,
    },
    {
      id: 5,
      name: "Tom H.",
      location: "Buckhead, GA",
      content:
        "Used them for our commercial building after storm. They coordinated with insurance and got supplements approved too. Professional crew, finished on time. Would definitely use again.",
      rating: 5,
    },
    {
      id: 6,
      name: "Lisa P.",
      location: "Rocky River, OH",
      content:
        "wind damage to roof - they came same day!! worked with insurance from the start and made sure everything was documented right. got supplements too. new roof looks great",
      rating: 5,
    },
    {
      id: 7,
      name: "Robert S.",
      location: "Arlington, VA",
      content:
        "Storm restoration is stressful but these guys made it easy. Coordinated with insurance, did all paperwork, got supplements approved. Repairs look perfect and our adjuster even said their documentation was really good.",
      rating: 5,
    },
    {
      id: 8,
      name: "Amanda L.",
      location: "Westlake, OH",
      content:
        "Complete exterior after hail damage. They worked with insurance and got EVERYTHING covered including supplements. House looks incredible now, neighbors keep asking who did it lol",
      rating: 5,
    },
    {
      id: 9,
      name: "Chris B.",
      location: "Plano, TX",
      content:
        "After the big hail storm they handled our whole claim and restoration. Got supplements for extra damage and made everything smooth. Best contractor experience we've had honestly.",
      rating: 5,
    },
    {
      id: 10,
      name: "Karen W.",
      location: "Fairfax, VA",
      content:
        "Roof restoration after storm was perfect. They coordinated with insurance, documented everything, even got supplements for things adjuster missed at first. Really went above and beyond.",
      rating: 5,
    },
    {
      id: 11,
      name: "James D.",
      location: "Beachwood, OH",
      content:
        "We manage commercial properties and use them for all restoration work. They know how to work with insurance companies and always get fair settlements with supplements. Reliable every time.",
      rating: 5,
    },
    {
      id: 12,
      name: "Michelle G.",
      location: "Marietta, GA",
      content:
        "Had them do siding restoration, results are amazing! No insurance needed but pricing was fair. Crew was super professional and detail oriented. Already planning next project with them.",
      rating: 5,
    },
    {
      id: 13,
      name: "Brian K.",
      location: "Potomac, MD",
      content:
        "Emergency storm damage - they were out in HOURS. Worked with insurance to get everything approved fast including supplements. Can't thank them enough for being so responsive when we really needed help.",
      rating: 5,
    },
    {
      id: 14,
      name: "Nicole R.",
      location: "Fort Worth, TX",
      content:
        "used them twice now for storm restoration. both times they handled insurance perfectly and got supplements approved. communication is excellent. using them for another property soon",
      rating: 5,
    },
    {
      id: 15,
      name: "Mark J.",
      location: "Cleveland Heights, OH",
      content:
        "Roof and siding after wind damage. Worked with insurance and got everything covered plus supplements. Crew was professional and final result is better than we expected. Very impressed.",
      rating: 5,
    },
    {
      id: 16,
      name: "Patricia M.",
      location: "Rockville, MD",
      content:
        "Water damage restoration was handled so well. They coordinated with insurance, documented perfectly, got supplements for mold remediation. Restoration is flawless, house looks better than before!",
      rating: 5,
    },
    {
      id: 17,
      name: "Steven L.",
      location: "Parma, OH",
      content:
        "after hail damage they made insurance process easy. handled documentation, worked with adjuster, got supplements for extra repairs. quality work and fair pricing",
      rating: 5,
    },
    {
      id: 18,
      name: "Rachel H.",
      location: "Reston, VA",
      content:
        "Complete exterior restoration and WOW the transformation!! They worked with insurance throughout and got everything approved. Professional crew, great communication, beautiful results.",
      rating: 5,
    },
    {
      id: 19,
      name: "Daniel P.",
      location: "Alpharetta, GA",
      content:
        "Commercial building after storm damage. Coordinated with insurance and got supplements for additional work. Minimal disruption to business. Already using them for another property.",
      rating: 5,
    },
    {
      id: 20,
      name: "Emily S.",
      location: "Strongsville, OH",
      content:
        "storm damage restoration perfect from start to finish. worked with insurance, got supplements, kept us informed every step. repairs are top quality, home looks amazing",
      rating: 5,
    },
    {
      id: 21,
      name: "Kevin T.",
      location: "Grapevine, TX",
      content:
        "After tornado damage they responded immediately. Worked with insurance to get everything covered including supplements. Restoration is excellent and they made stressful situation way easier.",
      rating: 5,
    },
    {
      id: 22,
      name: "Laura B.",
      location: "Alexandria, VA",
      content:
        "Roof restoration after wind damage was seamless. Coordinated with insurance, documented thoroughly, got supplements approved. Already recommended to neighbors with storm damage.",
      rating: 5,
    },
    {
      id: 23,
      name: "Andrew W.",
      location: "Mentor, OH",
      content:
        "Siding and windows after hail storm. Handled all insurance coordination and got supplements for extra damage. Crew was respectful. Final result exceeded expectations and process was stress free.",
      rating: 5,
    },
    {
      id: 24,
      name: "Jessica R.",
      location: "Chevy Chase, MD",
      content:
        "Water damage in basement handled expertly. Worked with insurance to get everything approved including supplements for structural repairs. Restoration is perfect, made difficult situation easier.",
      rating: 5,
    },
    {
      id: 25,
      name: "Michael C.",
      location: "Sandy Springs, GA",
      content:
        "Commercial restoration work - they delivered! Worked with insurance and got supplements for additional repairs. Professional, efficient, quality work. Property manager was impressed.",
      rating: 5,
    },
    {
      id: 26,
      name: "Stephanie K.",
      location: "Avon Lake, OH",
      content:
        "Storm damage including roof and gutters. Coordinated everything with insurance and got supplements approved quick. Professional crew, excellent communication. Planning future projects with them.",
      rating: 5,
    },
    {
      id: 27,
      name: "Ryan M.",
      location: "McLean, VA",
      content:
        "Complete exterior after storm. Handled all insurance documentation and got supplements approved smoothly. Professional crew, great communication, quality exceeded expectations.",
      rating: 5,
    },
    {
      id: 28,
      name: "Christina L.",
      location: "Solon, OH",
      content:
        "Roof and siding restoration perfect! Worked with insurance from day one and got everything covered including supplements. Transformation is amazing, neighbors keep complimenting. So happy!!",
      rating: 5,
    },
    {
      id: 29,
      name: "Jason D.",
      location: "Irving, TX",
      content:
        "hail damage restoration made easy. coordinated with insurance, got supplements, completed quality work on schedule. professional team and great communication",
      rating: 5,
    },
    {
      id: 30,
      name: "Melissa F.",
      location: "Annandale, VA",
      content:
        "Water damage was stressful but they made it manageable. Worked with insurance to get everything approved including supplements. Restoration is flawless, home looks better than before damage.",
      rating: 5,
    },
    {
      id: 31,
      name: "Timothy H.",
      location: "Hudson, OH",
      content:
        "Complete storm damage - roof, siding, gutters. Handled insurance coordination and got supplements for extra work. Quality craftsmanship. Whole experience exceeded expectations.",
      rating: 5,
    },
    {
      id: 32,
      name: "Angela P.",
      location: "Roswell, GA",
      content:
        "Exterior restoration work and couldn't be happier. Worked with insurance and got everything approved smoothly. Crew was respectful. Final result is beautiful, process was stress free.",
      rating: 5,
    },
    {
      id: 33,
      name: "Gregory S.",
      location: "North Olmsted, OH",
      content:
        "storm restoration after wind damage handled expertly. coordinated with insurance, documented perfectly, got supplements for additional repairs. already recommended to family and friends",
      rating: 5,
    },
    {
      id: 34,
      name: "Heather M.",
      location: "Bethesda, MD",
      content:
        "Roof restoration after hail was seamless. Worked directly with insurance and got supplements approved quickly. Crew was professional, new roof looks fantastic. Great experience!",
      rating: 5,
    },
    {
      id: 35,
      name: "Brandon K.",
      location: "Frisco, TX",
      content:
        "Complete restoration after storm - roof and siding. Handled insurance paperwork and got supplements for additional work. Quality exceeded expectations, finished ahead of schedule. Best contractor.",
      rating: 5,
    },
    {
      id: 36,
      name: "Kimberly R.",
      location: "Broadview Heights, OH",
      content:
        "water damage restoration perfect. coordinated with insurance to get everything approved including supplements for structural repairs. restoration work excellent",
      rating: 5,
    },
    {
      id: 37,
      name: "Eric T.",
      location: "Vienna, VA",
      content:
        "Storm damage with complete roof replacement. Worked with insurance and got supplements for additional repairs. Professional crew and quality work. Whole process easier than expected.",
      rating: 5,
    },
    {
      id: 38,
      name: "Samantha W.",
      location: "Dunwoody, GA",
      content:
        "Siding restoration results are AMAZING. Coordinated with insurance and got everything covered. Crew was meticulous. Already planning next project. Highly recommend!!",
      rating: 5,
    },
    {
      id: 39,
      name: "Matthew L.",
      location: "Bay Village, OH",
      content:
        "Complete exterior after hail storm. Handled insurance coordination and got supplements for extra damage. Quality craftsmanship, excellent communication. Home looks better than before storm.",
      rating: 5,
    },
    {
      id: 40,
      name: "Rebecca H.",
      location: "Arlington, TX",
      content:
        "storm restoration handled expertly start to finish. worked with insurance and got supplements for additional repairs. professional service, quality exceeded expectations",
      rating: 5,
    },
    {
      id: 41,
      name: "Jonathan P.",
      location: "Fairfax Station, VA",
      content:
        "Roof and gutter restoration after wind damage. Coordinated everything with insurance and got supplements approved quickly. Crew was professional, work is top quality. Made stressful situation manageable.",
      rating: 5,
    },
    {
      id: 42,
      name: "Ashley M.",
      location: "Brecksville, OH",
      content:
        "Complete restoration after storm was seamless. Handled insurance documentation and got supplements for additional work. Professional crew, excellent results. Recommended to neighbors.",
      rating: 5,
    },
    {
      id: 43,
      name: "Nathan S.",
      location: "Woodstock, GA",
      content:
        "Commercial building restoration perfect. Worked with insurance carrier and got supplements for extra repairs. Minimal disruption, quality exceeded expectations. Our go-to contractor now.",
      rating: 5,
    },
    {
      id: 44,
      name: "Victoria K.",
      location: "Olmsted Falls, OH",
      content:
        "water damage was stressful but they made it easy. coordinated with insurance, got supplements, completed beautiful restoration. professional service",
      rating: 5,
    },
    {
      id: 45,
      name: "Benjamin R.",
      location: "Leesburg, VA",
      content:
        "Storm damage - roof and siding. Handled insurance coordination and got supplements for additional damage. Quality work, professional crew. Whole experience smoother than anticipated.",
      rating: 5,
    },
    {
      id: 46,
      name: "Danielle T.",
      location: "McKinney, TX",
      content:
        "Complete exterior after hail damage. Worked with insurance and got everything approved including supplements. Transformation is incredible, crew was amazing. Highly recommend for restoration!!",
      rating: 5,
    },
    {
      id: 47,
      name: "Christopher W.",
      location: "Independence, OH",
      content:
        "Roof restoration handled expertly. Coordinated with insurance, documented perfectly, got supplements approved. Professional service, quality exceeded expectations. Using them for another property.",
      rating: 5,
    },
    {
      id: 48,
      name: "Megan L.",
      location: "Gaithersburg, MD",
      content:
        "Storm damage - siding and windows. Handled insurance paperwork and got supplements for additional repairs. Crew was respectful. Final result beautiful, process stress free.",
      rating: 5,
    },
    {
      id: 49,
      name: "Nicholas H.",
      location: "Johns Creek, GA",
      content:
        "Complete restoration work and couldn't be happier. Worked seamlessly with insurance and got supplements approved. Quality craftsmanship, excellent communication. Best contractor experience.",
      rating: 5,
    },
    {
      id: 50,
      name: "Elizabeth P.",
      location: "Westlake, OH",
      content:
        "Water and storm damage restoration perfect. Coordinated everything with insurance and got supplements for structural repairs. Restoration flawless, made difficult situation easier. Highly recommend.",
      rating: 5,
    },
  ]

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)
  const startIndex = currentPage * testimonialsPerPage
  const currentTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerPage)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
    }, 15000)

    return () => clearInterval(timer)
  }, [totalPages])

  const nextPage = () => {
    setCurrentPage((currentPage + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((currentPage - 1 + totalPages) % totalPages)
  }

  return (
    <section className="py-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-2">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real reviews from real customers across Cleveland, DC Metro, Atlanta, and Dallas-Fort Worth. Hear from
            homeowners and businesses who have experienced the National Restoration difference.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
            >
              {currentTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow relative"
                >
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />

                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4 relative z-10">{testimonial.content}</p>

                  <div className="border-t pt-3">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentPage === index ? "bg-primary w-8" : "bg-gray-300 w-2"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevPage}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={nextPage}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
