const fs = require('fs');
const path = require('path');
const { resizeImage, cropImage, convertImageFormat } = require('./index');

const inputImagePath = path.join(__dirname, 'input.jpg');
const outputDir = path.join(__dirname, 'output');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const inputBuffer = fs.readFileSync(inputImagePath);

// Resize example
resizeImage(inputBuffer, 300, 300)
    .then(resizedBuffer => {
        fs.writeFileSync(path.join(outputDir, 'resized.jpg'), resizedBuffer);
        console.log('Image resized successfully!');
    })
    .catch(console.error);

// Crop example
cropImage(inputBuffer, 300, 300)
    .then(croppedBuffer => {
        fs.writeFileSync(path.join(outputDir, 'cropped.jpg'), croppedBuffer);
        console.log('Image cropped successfully!');
    })
    .catch(console.error);

// Convert format example
convertImageFormat(inputBuffer, 'png')
    .then(convertedBuffer => {
        fs.writeFileSync(path.join(outputDir, 'converted.png'), convertedBuffer);
        console.log('Image format converted successfully!');
    })
    .catch(console.error);
