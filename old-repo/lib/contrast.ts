export function getContrastRatio(foreground: string, background: string): number {
  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b)
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex)
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 }
  }

  // Calculate relative luminance
  const getLuminance = (rgb: { r: number; g: number; b: number }) => {
    const a = [rgb.r, rgb.g, rgb.b].map((v) => {
      v /= 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    })
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
  }

  const rgb1 = hexToRgb(foreground)
  const rgb2 = hexToRgb(background)
  const l1 = getLuminance(rgb1)
  const l2 = getLuminance(rgb2)

  // Return contrast ratio
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

export function isContrastSufficient(foreground: string, background: string): boolean {
  // WCAG AA requires a contrast ratio of at least 4.5:1 for normal text
  return getContrastRatio(foreground, background) >= 4.5
}

export function suggestBetterContrast(foreground: string, background: string): string {
  // If contrast is already good, return the original color
  if (isContrastSufficient(foreground, background)) {
    return foreground
  }

  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b)
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex)
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 }
  }

  // Convert RGB to hex
  const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }

  const rgb = hexToRgb(foreground)
  const bgRgb = hexToRgb(background)

  // Calculate luminance of background
  const bgLuminance = (0.299 * bgRgb.r) / 255 + (0.587 * bgRgb.g) / 255 + (0.114 * bgRgb.b) / 255

  // Adjust color based on background luminance
  let adjustedRgb
  if (bgLuminance > 0.5) {
    // Dark text on light background
    adjustedRgb = {
      r: Math.max(0, rgb.r - 40),
      g: Math.max(0, rgb.g - 40),
      b: Math.max(0, rgb.b - 40),
    }
  } else {
    // Light text on dark background
    adjustedRgb = {
      r: Math.min(255, rgb.r + 40),
      g: Math.min(255, rgb.g + 40),
      b: Math.min(255, rgb.b + 40),
    }
  }

  return rgbToHex(adjustedRgb.r, adjustedRgb.g, adjustedRgb.b)
}
