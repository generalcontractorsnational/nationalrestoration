# Windows Setup Guide for Cloudinary Migration

## Step 1: Install Node.js

If you get the error `'node' is not recognized`, you need to install Node.js:

1. **Download Node.js**
   - Go to: https://nodejs.org/
   - Download the **LTS version** (Long Term Support)
   - The installer will typically be: `node-v20.x.x-x64.msi`

2. **Install Node.js**
   - Run the downloaded installer
   - Click "Next" through the setup wizard
   - **Important:** Make sure "Add to PATH" is checked (it's checked by default)
   - Complete the installation

3. **Restart PowerShell**
   - Close all PowerShell windows
   - Open a new PowerShell window

4. **Verify Installation**
   ```powershell
   node --version
   npm --version
   ```

   You should see version numbers like:
   ```
   v20.11.0
   10.2.4
   ```

## Step 2: Pull Latest Changes

```powershell
git pull origin claude/migrate-images-to-cloudinary-011CUsgHn4n5XHcafTKt8h35
```

## Step 3: Install Dependencies

```powershell
npm install
```

This will install:
- `cloudinary` - SDK for uploading images
- `next-cloudinary` - Next.js integration
- `dotenv` - Environment variable loading

## Step 4: Run Migration Scripts

I've added convenient npm scripts you can use:

### Option A: Using npm scripts (Recommended)

```powershell
# 1. Upload all images to Cloudinary
npm run cloudinary:upload

# 2. Update code references
npm run cloudinary:migrate

# 3. (Optional) Test your app
npm run dev

# 4. (Optional) Remove local images to save 222MB
npm run cloudinary:cleanup
```

### Option B: Using node directly

If Node.js is now working:

```powershell
# 1. Upload images
node scripts/upload-to-cloudinary.js

# 2. Update references
node scripts/migrate-image-references.js

# 3. Cleanup local images (optional)
node scripts/cleanup-local-images.js
```

### Option C: Upload and migrate in one command

```powershell
npm run cloudinary:all
```

## Troubleshooting

### Error: 'node' is not recognized

**Solution 1:** Restart your computer after installing Node.js

**Solution 2:** Manually add Node.js to PATH
1. Search for "Environment Variables" in Windows
2. Click "Environment Variables"
3. Under "System Variables", find "Path"
4. Click "Edit"
5. Add: `C:\Program Files\nodejs\`
6. Click OK and restart PowerShell

**Solution 3:** Use the full path
```powershell
& "C:\Program Files\nodejs\node.exe" scripts/upload-to-cloudinary.js
```

### Error: Cannot find module

```powershell
npm install
```

### Error: ENOENT (file not found)

Make sure you're in the project directory:
```powershell
cd "C:\Users\renat\Downloads\New folder (3)\nationalrestoration"
```

### Upload fails with network error

- Check your internet connection
- Verify Cloudinary credentials in `.env.local`
- Try disabling VPN if you're using one

### Execution policy error

If you get "running scripts is disabled", run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Expected Output

When you run `npm run cloudinary:upload`, you should see:

```
Starting Cloudinary upload...
Cloud Name: dhegnhnyn
Found 477 images to upload

Uploading: image-1.jpg...
✓ Uploaded: image-1.jpg -> https://res.cloudinary.com/...
Uploading: image-2.jpg...
✓ Uploaded: image-2.jpg -> https://res.cloudinary.com/...
...

=================================
Upload Complete!
✓ Successful: 477
✗ Failed: 0
=================================
```

## What Each Script Does

1. **cloudinary:upload** - Uploads all 477 images from `/public` to Cloudinary
2. **cloudinary:migrate** - Updates your code to use Cloudinary URLs instead of local paths
3. **cloudinary:cleanup** - Removes local images (saves 222MB in your repo)
4. **cloudinary:all** - Runs upload + migrate automatically

## After Migration

```powershell
# Test your app
npm run dev

# Visit http://localhost:3000 and verify images load

# If everything works, commit the changes
git add .
git commit -m "Complete Cloudinary migration"
git push
```

## Benefits

✅ **222MB** reduction in repository size
✅ Faster Git operations (clone, pull, push)
✅ Images served from **global CDN**
✅ Automatic **format optimization** (WebP, AVIF)
✅ Automatic **compression**
✅ Responsive images with on-the-fly resizing

## Need Help?

1. Check Node.js is installed: `node --version`
2. Check npm is working: `npm --version`
3. Check you're in the project directory: `pwd`
4. Check the detailed guide: `CLOUDINARY_MIGRATION_GUIDE.md`

## Quick Reference

```powershell
# Complete migration in 3 commands:
npm install
npm run cloudinary:all
npm run dev
```
