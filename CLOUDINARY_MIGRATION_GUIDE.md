# Cloudinary Migration Guide

This guide will help you migrate all 477 images (222MB) from your local `/public` folder to Cloudinary.

## Prerequisites

✅ Already completed:
- Cloudinary SDK installed (`cloudinary`, `next-cloudinary`)
- Environment variables configured in `.env.local`
- Upload script created
- Cloudinary helper utilities created

## Step 1: Upload Images to Cloudinary

Run the upload script from your project root:

```bash
node scripts/upload-to-cloudinary.js
```

This will:
- Upload all 477 images to your Cloudinary account
- Preserve the original filenames (without extensions) as public IDs
- Create a log file at `scripts/cloudinary-upload-log.json` with all upload details
- Display progress and success/failure counts

**Expected output:**
```
Found 477 images to upload
✓ Uploaded: image-name.jpg -> https://res.cloudinary.com/...
...
✓ Successful: 477
✗ Failed: 0
```

## Step 2: Update Code References

After successful upload, run the migration script to update all code references:

```bash
node scripts/migrate-image-references.js
```

This will automatically update all image paths in your TypeScript/TSX files to use Cloudinary URLs.

## Step 3: Test Your Application

```bash
npm run dev
```

Browse your application and verify that all images load correctly from Cloudinary.

## Step 4: Remove Local Images (Optional)

Once you've verified everything works:

```bash
# Backup first (recommended)
cp -r public public-backup

# Remove image files but keep other assets
node scripts/cleanup-local-images.js
```

This will save approximately 222MB in your repository.

## Step 5: Commit Changes

```bash
git add .
git commit -m "Migrate images to Cloudinary"
git push
```

## Cloudinary Configuration

Your configuration in `.env.local`:
- Cloud Name: `dhegnhnyn`
- API Key: `357533731116428`
- API Secret: `S7dxmSUK30V8hol1F0memNd6aO4`

⚠️ **Security Note:** The `.env.local` file is already added to `.gitignore` to protect your credentials.

## Helper Functions

Use the Cloudinary helper functions in your components:

```typescript
import { getCloudinaryImageUrl } from '@/lib/cloudinary';

// Simple usage
<img src={getCloudinaryImageUrl('image-name.jpg')} alt="..." />

// With next/image
import Image from 'next/image';
<Image
  src={getCloudinaryImageUrl('image-name.jpg')}
  width={800}
  height={600}
  alt="..."
/>
```

## Troubleshooting

### Upload fails with authentication error
- Verify your credentials in `.env.local`
- Check your Cloudinary account status

### Images don't load
- Check the browser console for 404 errors
- Verify the public IDs in Cloudinary dashboard match your filenames (without extension)

### Rate limiting
- The upload script includes automatic batching (10 images at a time)
- Delays are added between batches to prevent rate limiting

## Benefits

- ✅ Reduced repository size from 222MB to ~0MB (images)
- ✅ Automatic image optimization
- ✅ Responsive images via Cloudinary transformations
- ✅ CDN delivery for faster load times
- ✅ Format conversion (WebP, AVIF) on-the-fly

## Support

If you encounter issues:
1. Check `scripts/cloudinary-upload-log.json` for upload details
2. Review Cloudinary dashboard: https://console.cloudinary.com/
3. Verify credentials and account limits
