# Cloudinary Migration Scripts

This directory contains scripts to help migrate your images to Cloudinary.

## Scripts

### 1. `upload-to-cloudinary.js`

Uploads all images from the `/public` folder to Cloudinary.

**Usage:**
```bash
node scripts/upload-to-cloudinary.js
```

**What it does:**
- Scans `/public` directory for all image files (.jpg, .jpeg, .png, .gif, .svg, .webp, .ico)
- Uploads each image to Cloudinary preserving the filename as the public ID
- Processes images in batches of 10 to avoid rate limiting
- Creates a log file `cloudinary-upload-log.json` with upload details

### 2. `migrate-image-references.js`

Updates all image references in your code to use Cloudinary URLs.

**Usage:**
```bash
node scripts/migrate-image-references.js
```

**Prerequisites:**
- Must run `upload-to-cloudinary.js` first
- Requires `cloudinary-upload-log.json` to exist

**What it does:**
- Scans all `.ts` and `.tsx` files in your project
- Finds image references (e.g., `/image-name.jpg`, `/images/project/photo.png`)
- Replaces them with Cloudinary URLs
- Displays count of files modified and references updated

### 3. `cleanup-local-images.js`

Deletes local image files that were successfully uploaded to Cloudinary.

**Usage:**
```bash
node scripts/cleanup-local-images.js
```

**Prerequisites:**
- Must run `upload-to-cloudinary.js` first
- Requires `cloudinary-upload-log.json` to exist

**What it does:**
- Reads the upload log to know which images were successfully uploaded
- Deletes only those images from `/public` directory
- Removes empty directories
- Preserves images that weren't uploaded (safety feature)

**⚠️ Warning:** This permanently deletes files. Make sure to backup first or verify uploads were successful.

## Migration Workflow

Follow these steps in order:

1. **Upload images**
   ```bash
   node scripts/upload-to-cloudinary.js
   ```

2. **Update code references**
   ```bash
   node scripts/migrate-image-references.js
   ```

3. **Test your application**
   ```bash
   npm run dev
   ```
   Browse and verify images load correctly

4. **Backup and cleanup** (optional)
   ```bash
   cp -r public public-backup
   node scripts/cleanup-local-images.js
   ```

5. **Commit changes**
   ```bash
   git add .
   git commit -m "Migrate images to Cloudinary"
   git push
   ```

## Log Files

### `cloudinary-upload-log.json`

Created by `upload-to-cloudinary.js`. Contains details about each uploaded image:

```json
{
  "image-name.jpg": {
    "publicId": "image-name",
    "url": "https://res.cloudinary.com/dhegnhnyn/image/upload/v1234567890/image-name.jpg",
    "format": "jpg",
    "width": 1920,
    "height": 1080,
    "bytes": 245678
  }
}
```

This log is used by the other scripts to know which images were successfully uploaded.

## Troubleshooting

### Upload fails

- Check your `.env.local` file has correct Cloudinary credentials
- Verify your Cloudinary account is active
- Check your internet connection
- Review rate limits on your Cloudinary plan

### Migration script doesn't find images

- Ensure `cloudinary-upload-log.json` exists and has content
- Check that image paths in your code match the filenames in `/public`
- Look for typos in image filenames

### Images don't load after migration

- Check browser console for 404 errors
- Verify Cloudinary URLs are correct
- Check Next.js config has Cloudinary domain whitelisted
- Clear Next.js cache: `rm -rf .next`

## Benefits

After completing the migration:

- ✅ **Reduced repo size**: ~222MB savings
- ✅ **Faster deployments**: Less data to transfer
- ✅ **Better performance**: CDN delivery worldwide
- ✅ **Auto optimization**: Format conversion, compression
- ✅ **Responsive images**: On-the-fly transformations

## See Also

- Main guide: `../CLOUDINARY_MIGRATION_GUIDE.md`
- Cloudinary helper: `../lib/cloudinary.ts`
