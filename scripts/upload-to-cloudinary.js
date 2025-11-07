const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const publicDir = path.join(__dirname, '../public');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico'];

// Create a log file for tracking uploads
const logFile = path.join(__dirname, 'cloudinary-upload-log.json');
const uploadedImages = {};

// Function to get all image files
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

// Function to upload a single image
async function uploadImage(filePath) {
  try {
    const relativePath = path.relative(publicDir, filePath);
    const publicId = relativePath.replace(/\.[^/.]+$/, '').replace(/\\/g, '/');

    console.log(`Uploading: ${relativePath}...`);

    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      folder: '',
      overwrite: true,
      resource_type: 'image',
      use_filename: true,
      unique_filename: false,
      type: 'upload',
      access_mode: 'public',
    });

    console.log(`✓ Uploaded: ${relativePath} -> ${result.secure_url}`);

    uploadedImages[relativePath] = {
      publicId: result.public_id,
      url: result.secure_url,
      format: result.format,
      width: result.width,
      height: result.height,
      bytes: result.bytes,
    };

    return result;
  } catch (error) {
    console.error(`✗ Failed to upload ${filePath}:`, error);
    return null;
  }
}

// Main upload function
async function uploadAllImages() {
  console.log('Starting Cloudinary upload...\n');
  console.log(`Cloud Name: ${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`);
  console.log(`Public Directory: ${publicDir}\n`);

  const imageFiles = getImageFiles(publicDir);
  console.log(`Found ${imageFiles.length} images to upload\n`);

  let successCount = 0;
  let failCount = 0;

  // Upload images in batches to avoid rate limiting
  const batchSize = 10;
  for (let i = 0; i < imageFiles.length; i += batchSize) {
    const batch = imageFiles.slice(i, i + batchSize);
    const promises = batch.map(uploadImage);
    const results = await Promise.all(promises);

    successCount += results.filter((r) => r !== null).length;
    failCount += results.filter((r) => r === null).length;

    // Add a small delay between batches
    if (i + batchSize < imageFiles.length) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  // Save the log
  fs.writeFileSync(logFile, JSON.stringify(uploadedImages, null, 2));

  console.log('\n=================================');
  console.log('Upload Complete!');
  console.log(`✓ Successful: ${successCount}`);
  console.log(`✗ Failed: ${failCount}`);
  console.log(`Log saved to: ${logFile}`);
  console.log('=================================\n');
}

// Run the upload
uploadAllImages().catch(console.error);
