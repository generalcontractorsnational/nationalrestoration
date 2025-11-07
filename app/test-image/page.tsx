"use client"

import { CldImage } from "next-cloudinary"

export default function TestImagePage() {
  // Test 1: Direct URL approach
  const directUrl = "https://res.cloudinary.com/dhegnhnyn/image/upload/v1762488570/adjuster-meeting-exterior.jpg"

  // Test 2: CldImage with explicit cloud name
  const testPublicId = "adjuster-meeting-exterior"

  // Test 3: Check what env var is set
  const envCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Cloudinary Image Test Page</h1>

      <div className="space-y-8">
        {/* Debug Info */}
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-2">Debug Info:</h2>
          <p>Environment Variable: {envCloudName || "NOT SET (fallback will be used)"}</p>
          <p>Fallback Cloud Name: dhegnhnyn</p>
          <p>Test Public ID: {testPublicId}</p>
        </div>

        {/* Test 1: Regular img tag with full URL */}
        <div className="border p-4">
          <h2 className="font-bold mb-2">Test 1: Regular img tag (should work)</h2>
          <img
            src={directUrl}
            alt="Test with direct URL"
            width={300}
            height={300}
            className="border"
          />
          <p className="text-sm mt-2">URL: {directUrl}</p>
        </div>

        {/* Test 2: CldImage with explicit cloudName */}
        <div className="border p-4">
          <h2 className="font-bold mb-2">Test 2: CldImage with explicit cloudName prop</h2>
          <CldImage
            src={testPublicId}
            alt="Test with CldImage"
            width={300}
            height={300}
            cloudName="dhegnhnyn"
            className="border"
          />
          <p className="text-sm mt-2">Public ID: {testPublicId}</p>
          <p className="text-sm">Cloud Name: dhegnhnyn (hardcoded)</p>
        </div>

        {/* Test 3: CldImage with fallback */}
        <div className="border p-4">
          <h2 className="font-bold mb-2">Test 3: CldImage with fallback logic</h2>
          <CldImage
            src={testPublicId}
            alt="Test with fallback"
            width={300}
            height={300}
            cloudName={envCloudName || "dhegnhnyn"}
            className="border"
          />
          <p className="text-sm mt-2">Public ID: {testPublicId}</p>
          <p className="text-sm">Cloud Name: {envCloudName || "dhegnhnyn (fallback)"}</p>
        </div>

        {/* Test 4: Known uploaded image from log */}
        <div className="border p-4">
          <h2 className="font-bold mb-2">Test 4: Before/After image from upload log</h2>
          <CldImage
            src="images/before-after/roof-damage-before"
            alt="Roof damage before"
            width={300}
            height={300}
            cloudName="dhegnhnyn"
            className="border"
          />
          <p className="text-sm mt-2">Public ID: images/before-after/roof-damage-before</p>
        </div>
      </div>
    </div>
  )
}
