const sharp = require("sharp");
const fs = require("fs");

const inputDirs = ["./images", "./img"];

const optimize = async () => {
  for (const inputDir of inputDirs) {
    // Read input directory
    fs.readdir(inputDir, (err, files) => {
      if (err) {
        console.log(`Error reading directory: ${err}`);
      } else {
        for (const file of files) {
          if (
            file.endsWith(".jpg") ||
            file.endsWith(".jpeg") ||
            file.endsWith(".png")
          ) {
            // Read input file
            const inputFile = `${inputDir}/${file}`;
            sharp(inputFile)
              .webp({ quality: 85 }) // Convert to webp and set quality to 85
              .toFile(`${inputDir}/${file.split(".")[0]}.webp`)
              .then(() => {
                console.log(`Optimized ${file}`);
              })
              .catch((err) => {
                console.log(`Error optimizing image: ${err}`);
              });
          }
        }
      }
    });
  }
};

// Run the script
if (require.main === module) {
  optimize();
}
