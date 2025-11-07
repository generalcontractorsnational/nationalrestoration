require('dotenv').config({ path: '.env.local' });
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const logFile = path.join(__dirname, 'cloudinary-upload-log.json');

async function updateImageAccess(publicId) {
  try {
    // Update the access mode to public using the explicit API
    const result = await cloudinary.api.update(publicId, {
      access_mode: 'public',
      type: 'upload',
      resource_type: 'image'
    });

    console.log(`✓ Updated access for: ${publicId}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to update ${publicId}:`, error.message);
    return false;
  }
}

async function updateAllImages() {
  // Read the upload log
  if (!fs.existsSync(logFile)) {
    console.error('Error: Upload log not found.');
    process.exit(1);
  }

  const uploadedImages = JSON.parse(fs.readFileSync(logFile, 'utf8'));
  const publicIds = Object.values(uploadedImages).map(img => img.publicId);

  console.log(`Found ${publicIds.length} images to update\n`);
  console.log('Updating access permissions to public...\n');

  let successCount = 0;
  let failCount = 0;

  // Process in batches to avoid rate limiting
  for (let i = 0; i < publicIds.length; i++) {
    const success = await updateImageAccess(publicIds[i]);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }

    // Add delay every 10 images to avoid rate limiting
    if ((i + 1) % 10 === 0) {
      console.log(`\nProcessed ${i + 1}/${publicIds.length}... (waiting 2s)\n`);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  console.log('\n=================================');
  console.log('Access Update Complete!');
  console.log(`✓ Successful: ${successCount}`);
  console.log(`✗ Failed: ${failCount}`);
  console.log('=================================\n');
}

updateAllImages().catch(console.error);
