const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..');
const logFile = path.join(__dirname, 'cloudinary-upload-log.json');

// Read the upload log to know which images were successfully uploaded
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

console.log(`Found ${Object.keys(uploadedImages).length} uploaded images in log\n`);

// Function to find all TypeScript/TSX files
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // Skip node_modules, .next, and other build directories
    if (stat.isDirectory()) {
      if (!['node_modules', '.next', 'dist', 'build', '.git'].includes(file)) {
        getAllFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to update image references in a file
function updateImageReferences(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let changeCount = 0;

  // Pattern to match image references: /image-name.ext
  const imagePattern = /(['"`])(\/)([a-zA-Z0-9-_]+\.(jpg|jpeg|png|gif|svg|webp|ico))(['"`])/g;

  content = content.replace(imagePattern, (match, quote1, slash, filename, ext, quote2) => {
    // Check if this image was uploaded to Cloudinary
    if (uploadedImages[filename]) {
      const publicId = uploadedImages[filename].publicId;
      const cloudinaryUrl = `https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/${publicId}`;
      modified = true;
      changeCount++;
      return `${quote1}${cloudinaryUrl}${quote2}`;
    }
    return match;
  });

  // Also check for images in subdirectories (images/...)
  const subDirPattern = /(['"`])(\/)?(images\/[a-zA-Z0-9-_/]+\.(jpg|jpeg|png|gif|svg|webp|ico))(['"`])/g;

  content = content.replace(subDirPattern, (match, quote1, slash, filename, ext, quote2) => {
    // Check if this image was uploaded to Cloudinary
    if (uploadedImages[filename]) {
      const publicId = uploadedImages[filename].publicId;
      const cloudinaryUrl = `https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/${publicId}`;
      modified = true;
      changeCount++;
      return `${quote1}${cloudinaryUrl}${quote2}`;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated ${changeCount} reference(s) in: ${path.relative(srcDir, filePath)}`);
    return changeCount;
  }

  return 0;
}

// Main migration function
function migrateAllReferences() {
  console.log('Starting image reference migration...\n');

  const files = getAllFiles(srcDir);
  console.log(`Found ${files.length} TypeScript/TSX files to process\n`);

  let totalChanges = 0;
  let filesModified = 0;

  files.forEach((filePath) => {
    const changes = updateImageReferences(filePath);
    if (changes > 0) {
      totalChanges += changes;
      filesModified++;
    }
  });

  console.log('\n=================================');
  console.log('Migration Complete!');
  console.log(`Files modified: ${filesModified}`);
  console.log(`Total references updated: ${totalChanges}`);
  console.log('=================================\n');
}

// Run the migration
migrateAllReferences();
