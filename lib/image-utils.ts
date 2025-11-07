/**
 * Extracts the Cloudinary public ID from a full Cloudinary URL or returns the input as-is
 * @param src - Either a full Cloudinary URL or a public ID
 * @returns The public ID that can be used with CldImage
 */
export function getCloudinaryPublicId(src: string): string {
  if (!src) return "placeholder"

  // If it's already just a publicId (no http/https), return as-is
  if (!src.startsWith("http")) {
    return src
  }

  // Extract publicId from Cloudinary URL
  // Format: https://res.cloudinary.com/{cloud_name}/image/upload/{transformations}/{publicId}.{ext}
  const match = src.match(/\/(?:image|video)\/upload\/(?:v\d+\/)?(?:f_auto,q_auto\/)?(.+?)(?:\.\w+)?$/)

  if (match && match[1]) {
    // Remove file extension if present
    return match[1].replace(/\.\w+$/, "")
  }

  // If we can't parse it, return as-is and let Cloudinary handle it
  return src
}
