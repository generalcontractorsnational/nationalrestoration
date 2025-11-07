const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const logFile = path.join(__dirname, 'cloudinary-upload-log.json');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico'];

// Read the upload log
let uploadedImages = {};
try {
  if (fs.existsSync(logFile)) {
    uploadedImages = JSON.parse(fs.readFileSync(logFile, 'utf8'));
  } else {
    console.error('Error: Upload log not found. Please run upload-to-cloudinary.js first.');
    process.exit(1);
  }
} catch (error) {
  console.error('Error reading upload log:', error.message);
  process.exit(1);
}

console.log('⚠️  WARNING: This will delete local image files that were successfully uploaded to Cloudinary.');
console.log(`Found ${Object.keys(uploadedImages).length} successfully uploaded images.\n`);

// Function to safely delete image files
function deleteImageFiles(dir) {
  const files = fs.readdirSync(dir);
  let deletedCount = 0;
  let skippedCount = 0;

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      deletedCount += deleteImageFiles(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        const relativePath = path.relative(publicDir, filePath);

        // Only delete if it was successfully uploaded
        if (uploadedImages[relativePath]) {
          try {
            fs.unlinkSync(filePath);
            console.log(`✓ Deleted: ${relativePath}`);
            deletedCount++;
          } catch (error) {
            console.error(`✗ Failed to delete ${relativePath}:`, error.message);
            skippedCount++;
          }
        } else {
          console.log(`⊘ Skipped (not in upload log): ${relativePath}`);
          skippedCount++;
        }
      }
    }
  });

  return deletedCount;
}

// Clean up empty directories
function cleanupEmptyDirectories(dir) {
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir);

  if (files.length > 0) {
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        cleanupEmptyDirectories(filePath);
      }
    });

    // Re-check if directory is now empty
    if (fs.readdirSync(dir).length === 0 && dir !== publicDir) {
      fs.rmdirSync(dir);
      console.log(`✓ Removed empty directory: ${path.relative(publicDir, dir)}`);
    }
  }
}

console.log('Starting cleanup...\n');

const deletedCount = deleteImageFiles(publicDir);

console.log('\nCleaning up empty directories...\n');
cleanupEmptyDirectories(publicDir);

console.log('\n=================================');
console.log('Cleanup Complete!');
console.log(`Images deleted: ${deletedCount}`);
console.log('=================================\n');
console.log('Your repository is now significantly lighter!');
console.log('All images are now served from Cloudinary CDN.\n');
