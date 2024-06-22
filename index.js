const sharp = require('sharp');

/**
 * Resize an image to the specified width and height.
 * @param {Buffer} inputBuffer - The input image as a buffer.
 * @param {number} width - The width to resize the image to.
 * @param {number} height - The height to resize the image to.
 * @returns {Promise<Buffer>} - A promise that resolves with the resized image buffer.
 */
const resizeImage = async (inputBuffer, width, height) => {
    try {
        const resizedImage = await sharp(inputBuffer)
            .resize(width, height)
            .toBuffer();
        return resizedImage;
    } catch (error) {
        throw new Error(`Error resizing image: ${error.message}`);
    }
};

/**
 * Crop an image to the specified width and height from the top left corner.
 * @param {Buffer} inputBuffer - The input image as a buffer.
 * @param {number} width - The width to crop the image to.
 * @param {number} height - The height to crop the image to.
 * @returns {Promise<Buffer>} - A promise that resolves with the cropped image buffer.
 */
const cropImage = async (inputBuffer, width, height) => {
    try {
        const croppedImage = await sharp(inputBuffer)
            .extract({ width, height, left: 0, top: 0 })
            .toBuffer();
        return croppedImage;
    } catch (error) {
        throw new Error(`Error cropping image: ${error.message}`);
    }
};

/**
 * Convert an image to the specified format.
 * @param {Buffer} inputBuffer - The input image as a buffer.
 * @param {string} format - The format to convert the image to (e.g., 'jpeg', 'png', 'webp').
 * @returns {Promise<Buffer>} - A promise that resolves with the converted image buffer.
 */
const convertImageFormat = async (inputBuffer, format) => {
    try {
        const convertedImage = await sharp(inputBuffer)
            .toFormat(format)
            .toBuffer();
        return convertedImage;
    } catch (error) {
        throw new Error(`Error converting image format: ${error.message}`);
    }
};

module.exports = {
    resizeImage,
    cropImage,
    convertImageFormat,
};
