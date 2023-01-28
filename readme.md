# Image Optimization Script using Sharp and WebP

This project is a Node.js script that utilizes the Sharp library to convert JPG, JPEG and PNG images to the WebP format and optimize them for faster web performance. The script allows you to specify multiple input directories, and it will process all images in those directories, converting them to WebP and saving them in the same location.

This can help you to optimize your website's images, resulting in faster loading times and a better user experience.

## Requirement

- Node.js v12 or later
- npm (comes with Node.js)

## Installation

Clone this repository to your local machine

```bash
git clone https://github.com/aadrshkashyp/webp-Converter-with-JavaScript
```

Change into the project directory

```bash
cd YOUR-REPOSITORY
```

Change into the project directory

```bash
npm install
```

## Usage/Examples

Specify the input directories in the inputDirs array in the index.js file

```javascript
const inputDirs = ["./images", "./img"];
```

Run the script

```javascript
node index.js
```

The script will process all images in the specified input directories and convert them to the WebP format, saving them in the same location.

You can also change the quality of the image by modifying the .webp({ quality: 85 }) in index.js

## Note

- The script will overwrite the original images, so make sure to backup your images before running the script.
- The script will ignore any files that do not have a .jpg, .jpeg, or .png extension.

## Conclusion

This image optimization script using Sharp and WebP can help you to optimize your website's images and improve the overall performance of your website. I hope this helps you to improve the performance of your website.
