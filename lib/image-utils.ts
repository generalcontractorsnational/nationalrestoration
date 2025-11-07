/**
 * Extracts the Cloudinary public ID from a full Cloudinary URL or local path
 * @param src - Either a full Cloudinary URL, local path, or a public ID
 * @returns The public ID that can be used with CldImage
 */
export function getCloudinaryPublicId(src: string): string {
  if (!src) return "placeholder"

  // If it's a full Cloudinary URL, extract the public ID
  if (src.startsWith("http")) {
    // Format: https://res.cloudinary.com/{cloud_name}/image/upload/{transformations}/{publicId}.{ext}
    const match = src.match(/\/(?:image|video)\/upload\/(?:v\d+\/)?(?:f_auto,q_auto\/)?(.+?)(?:\.\w+)?$/)
    if (match && match[1]) {
      // Remove file extension if present
      return match[1].replace(/\.\w+$/, "")
    }
    return src
  }

  // If it starts with a slash (local path like /images/project/file.jpg)
  if (src.startsWith("/")) {
    // Remove leading slash and file extension
    return src.slice(1).replace(/\.\w+$/, "")
  }

  // Otherwise assume it's already a public ID
  return src
}
