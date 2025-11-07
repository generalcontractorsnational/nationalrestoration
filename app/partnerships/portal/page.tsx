import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PortalLoginForm } from "@/components/portal-login-form"

export const metadata: Metadata = {
  title: "Partner Portal | National Restoration",
  description: "Access your National Restoration partner portal to manage projects, access resources, and more.",
}

export default function PartnerPortalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/logo" alt="National Restoration" width={40} height={40} className="mr-2" />
            <span className="text-xl font-bold">National Restoration</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/partnerships/apply" className="text-sm font-medium text-primary hover:text-primary/90">
              Apply for Partnership
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Log in to Partner Portal</h1>
            <p className="text-gray-600">Access your dedicated portal for project management and resources</p>
          </div>

          <PortalLoginForm />

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don't have partner access?{" "}
              <Link href="/partnerships/apply" className="text-primary hover:text-primary/90 font-medium">
                Apply Now
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="py-4 px-6 border-t">
        <div className="container mx-auto text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} National Restoration. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
