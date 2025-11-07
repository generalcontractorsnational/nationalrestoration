# Cloudinary Image Migration Setup Guide

This guide will help you set up Cloudinary for your National Restoration website and troubleshoot common deployment issues.

## 🚨 Common Issue: Images Not Showing in Production

If your images aren't showing when you deploy to Vercel, bolt.new, or other platforms, it's likely because the **environment variables aren't configured** in your deployment platform.

## Quick Fix for Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:
   ```
   Name: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
   Value: dhegnhnyn
   ```
4. Make sure it's checked for all environments: **Production**, **Preview**, and **Development**
5. **Redeploy your project** (Environment variables only take effect after redeployment)

## Quick Fix for bolt.new

bolt.new may not support environment variables configuration directly. You have two options:

### Option 1: Hardcode the cloud name (Quick but not ideal)
Edit `/lib/cloudinary.ts` and replace line 56:
```typescript
// Change from:
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dhegnhnyn';

// To:
const cloudName = 'dhegnhnyn';
```

Also update `/components/responsive-image.tsx` to pass the cloud name as a prop to CldImage.

### Option 2: Use a different deployment platform
Consider deploying to Vercel, Netlify, or other platforms that properly support environment variables.

---

## 📋 Prerequisites

1. A Cloudinary account (free tier is sufficient to start)
2. Your Cloudinary credentials from the [Cloudinary Dashboard](https://console.cloudinary.com/)

## 🔧 Setup Instructions

### Step 1: Get Your Cloudinary Credentials

1. Log in to [Cloudinary Console](https://console.cloudinary.com/)
2. Go to **Dashboard** → **Product Environment Credentials**
3. Copy the following values:
   - **Cloud Name**: `dhegnhnyn` (already configured)
   - **API Key**: Found in the dashboard
   - **API Secret**: Found in the dashboard (click "Show" to reveal)

### Step 2: Configure Local Environment

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your real credentials:
   ```env
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dhegnhnyn
   CLOUDINARY_API_KEY=your_actual_api_key
   CLOUDINARY_API_SECRET=your_actual_api_secret
   ```

3. **Important**: Never commit `.env.local` to git! It's already in `.gitignore`.

### Step 3: Upload Images to Cloudinary

Run the upload script to migrate your local images to Cloudinary:

```bash
npm run cloudinary:upload
```

This will:
- Scan all images in the `public/` directory
- Upload them to Cloudinary
- Create a log file at `scripts/cloudinary-upload-log.json`

### Step 4: Update Image References (Optional)

If you want to automatically update image references in your code:

```bash
npm run cloudinary:migrate
```

Or run both steps together:

```bash
npm run cloudinary:all
```

### Step 5: Configure Production Environment

#### For Vercel:

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → **Settings** → **Environment Variables**
3. Add the following variable:
   - **Name**: `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   - **Value**: `dhegnhnyn`
   - **Environments**: ✅ Production, ✅ Preview, ✅ Development

4. **Important**: You typically **DON'T** need to set `CLOUDINARY_API_KEY` and `CLOUDINARY_API_SECRET` in production unless you're doing server-side uploads.

5. **Redeploy** your application for the changes to take effect

#### For Netlify:

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Select your site → **Site settings** → **Environment variables**
3. Click **Add a variable**
4. Add:
   - **Key**: `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
   - **Value**: `dhegnhnyn`
   - **Scopes**: All scopes, All deploy contexts

5. **Redeploy** your site

#### For Other Platforms:

Check your platform's documentation for setting environment variables. The key variable you need is:
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dhegnhnyn
```

## 🎨 Using Images in Your Code

### Using the ResponsiveImage Component (Recommended)

```tsx
import ResponsiveImage from '@/components/responsive-image'

export default function MyPage() {
  return (
    <ResponsiveImage
      src="images/my-image.jpg"
      alt="Description"
      width={800}
      height={600}
      priority={false}
    />
  )
}
```

### Using CldImage Directly

```tsx
import { CldImage } from 'next-cloudinary'

export default function MyPage() {
  return (
    <CldImage
      src="images/my-image"
      alt="Description"
      width={800}
      height={600}
    />
  )
}
```

### Using the Utility Functions

```typescript
import { getCloudinaryUrl, getCloudinaryImageUrl } from '@/lib/cloudinary'

// With transformations
const url = getCloudinaryUrl('my-image', {
  width: 800,
  height: 600,
  quality: 'auto',
  format: 'auto'
})

// Simple URL
const simpleUrl = getCloudinaryImageUrl('my-image.jpg')
```

## 🔍 Troubleshooting

### Images not loading in development

1. Check that `.env.local` exists and has the correct `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
2. Restart your dev server: `npm run dev`
3. Clear your browser cache

### Images not loading in production

1. **Most common issue**: Environment variable not set in deployment platform
   - Go to your platform's environment variable settings
   - Add `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dhegnhnyn`
   - **Redeploy** the application

2. Check browser console for errors:
   - Press F12 → Console tab
   - Look for 404 errors or Cloudinary-related errors
   - Check if the Cloudinary URLs are being generated correctly

3. Verify the cloud name in your deployment:
   - The URL should look like: `https://res.cloudinary.com/dhegnhnyn/image/upload/...`
   - If you see `undefined` or a different cloud name, the environment variable isn't set correctly

### Upload script failing

1. Check your Cloudinary credentials in `.env.local`
2. Make sure you're not exceeding Cloudinary's free tier limits:
   - Maximum image file size: 10 MB
   - Maximum online image manipulation size: 100 MB
   - Admin API hourly requests: 500
3. Check the error message for rate limiting or authentication issues

### Cloudinary "Strict Transformations" errors

Your Cloudinary settings show "Strict Transformations" is **Disabled**, which is correct. If you see transformation errors:
1. Go to [Cloudinary Settings](https://console.cloudinary.com/settings/security)
2. Make sure "Strict transformations" is **Disabled**
3. Or add your domain to "Allowed strict referral domains"

## 📊 Cloudinary Settings Review

Based on your current settings:
- ✅ Strict transformations: Disabled (good for development)
- ✅ PDF and ZIP delivery: Allowed
- ✅ Upload API: Unlimited hourly requests
- ✅ Admin API: 500 hourly requests
- ✅ Max image file size: 10 MB
- ✅ Max video file size: 100 MB

These settings are appropriate for development and moderate production use.

## 🎯 Next Steps

1. ✅ Set up local environment with `.env.local`
2. ✅ Upload existing images with `npm run cloudinary:upload`
3. ✅ Set environment variable in Vercel/deployment platform
4. ✅ Redeploy your application
5. ✅ Test image loading in production
6. 🔄 Monitor Cloudinary usage in the dashboard

## 📚 Additional Resources

- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [next-cloudinary Documentation](https://next-cloudinary.dev/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Vercel Environment Variables Guide](https://vercel.com/docs/projects/environment-variables)

## 🆘 Still Having Issues?

If you're still experiencing problems after following this guide:

1. Check the browser console (F12) for specific error messages
2. Verify the Cloudinary URLs being generated
3. Confirm the environment variable is set in your deployment platform
4. Make sure you've **redeployed** after setting environment variables
5. Check Cloudinary dashboard for any account issues or quota limits

Remember: The most common issue is forgetting to set `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` in your deployment platform's environment variables!
