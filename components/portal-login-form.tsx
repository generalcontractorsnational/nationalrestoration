"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Github, Mail, Lock, AlertCircle, Loader2 } from "lucide-react"

export function PortalLoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate login attempt
    setTimeout(() => {
      setIsLoading(false)
      setError("This is a demo portal. In a real implementation, this would connect to your authentication system.")
    }, 1500)
  }

  return (
    <div className="space-y-6">
      {/* Login options */}
      <div className="grid grid-cols-1 gap-3">
        <button
          type="button"
          className="flex items-center justify-center gap-3 px-4 py-3 bg-[#24292F] text-white rounded-md hover:bg-[#24292F]/90 transition-colors"
        >
          <Github className="h-5 w-5" />
          <span>Continue with GitHub</span>
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-3 px-4 py-3 bg-[#6e5494] text-white rounded-md hover:bg-[#6e5494]/90 transition-colors"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
          </svg>
          <span>Continue with GitLab</span>
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-3 px-4 py-3 bg-[#0052CC] text-white rounded-md hover:bg-[#0052CC]/90 transition-colors"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM16.6713 8.6C16.6713 8.6 15.8713 8.2 14.8713 8.2C12.9713 8.2 12.0713 9.5 12.0713 9.5V8.3H9.97132V16.3H12.0713V11.7C12.0713 11.7 12.8713 10.6 13.9713 11C15.0713 11.4 15.0713 12.5 15.0713 12.5V16.3H17.1713V12C17.1713 12 17.2713 9.4 14.9713 8.9C14.9713 8.9 15.8713 8.9 16.6713 9.2V8.6Z" />
          </svg>
          <span>Continue with Bitbucket</span>
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      {/* Email form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="partner@example.com"
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Link href="/partners/reset-password" className="text-sm text-primary hover:text-primary/90">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </button>
      </form>

      <div className="text-center">
        <Link href="/partners/portal/sso" className="text-sm text-primary hover:text-primary/90">
          Continue with SAML SSO
        </Link>
      </div>
    </div>
  )
}
