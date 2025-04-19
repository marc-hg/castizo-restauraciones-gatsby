/**
 * Script to check image issues in the project
 * Run with: node tools/fix-images.js
 */

const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "../static/images/trabajos-realizados");

// Function to check if a file exists
const fileExists = (filepath) => {
  try {
    return fs.existsSync(filepath);
  } catch (e) {
    return false;
  }
};

// Function to get all image files in a directory
const getImagesInDir = (dir) => {
  try {
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map((file) => path.join(dir, file));
  } catch (e) {
    console.error(`Error reading directory ${dir}:`, e);
    return [];
  }
};

// Check case-sensitivity in filenames
const checkCaseSensitivity = (dir) => {
  try {
    if (!fs.existsSync(dir)) return [];

    const files = fs.readdirSync(dir);
    const lowerCaseMap = {};
    const issues = [];

    // Build map of lowercase filenames
    files.forEach((file) => {
      const lowerCase = file.toLowerCase();
      if (!lowerCaseMap[lowerCase]) {
        lowerCaseMap[lowerCase] = [];
      }
      lowerCaseMap[lowerCase].push(file);
    });

    // Find duplicates with different cases
    Object.keys(lowerCaseMap).forEach((key) => {
      if (lowerCaseMap[key].length > 1) {
        issues.push({
          dir: path.relative(IMAGES_DIR, dir),
          files: lowerCaseMap[key],
        });
      }
    });

    return issues;
  } catch (e) {
    console.error(`Error checking case sensitivity in ${dir}:`, e);
    return [];
  }
};

// Main function to check images
const checkImages = () => {
  console.log("Checking image files...");

  // Show all available images
  console.log("\nAvailable images by directory:");

  const caseSensitivityIssues = [];

  // Check each directory in trabajos-realizados
  fs.readdirSync(IMAGES_DIR)
    .filter((dir) => fs.statSync(path.join(IMAGES_DIR, dir)).isDirectory())
    .forEach((dir) => {
      const dirPath = path.join(IMAGES_DIR, dir);

      // Get images
      const imagesInDir = getImagesInDir(dirPath);
      console.log(`\n${dir}/ (${imagesInDir.length} images):`);

      if (imagesInDir.length === 0) {
        console.log("  No images found!");
      } else {
        imagesInDir.forEach((img) => {
          console.log(`- ${path.basename(img)}`);
        });
      }

      // Check case sensitivity
      const dirIssues = checkCaseSensitivity(dirPath);
      if (dirIssues.length > 0) {
        caseSensitivityIssues.push(...dirIssues);
      }
    });

  // Report case sensitivity issues
  if (caseSensitivityIssues.length > 0) {
    console.log("\n⚠️ Found files with case sensitivity issues:");
    caseSensitivityIssues.forEach((issue) => {
      console.log(`In ${issue.dir}/ directory:`);
      console.log(
        `  These files differ only by case: ${issue.files.join(", ")}`
      );
      console.log("  This may cause problems on case-sensitive file systems.");
    });
  }
};

// Run the check
checkImages();
