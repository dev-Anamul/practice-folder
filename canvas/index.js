// Get the canvas element and load the image onto it
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const image = new Image();
image.onload = function () {
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  detectEdges();
};
image.src = "./download.png";

// Detect edges using the Sobel algorithm
function detectEdges() {
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const x = (i / 4) % canvas.width;
    const y = Math.floor(i / (canvas.width * 4));
    const gx =
      getPixel(data, x - 1, y - 1) * -1 +
      getPixel(data, x + 1, y - 1) +
      getPixel(data, x - 1, y) * -2 +
      getPixel(data, x + 1, y) * 2 +
      getPixel(data, x - 1, y + 1) * -1 +
      getPixel(data, x + 1, y + 1);
    const gy =
      getPixel(data, x - 1, y - 1) * -1 +
      getPixel(data, x, y - 1) * -2 +
      getPixel(data, x + 1, y - 1) * -1 +
      getPixel(data, x - 1, y + 1) +
      getPixel(data, x, y + 1) * 2 +
      getPixel(data, x + 1, y + 1);
    const magnitude = Math.sqrt(gx * gx + gy * gy);
    const value = magnitude > 128 ? 255 : 0;
    // data[i] = data[i + 1] = data[i + 2] = value;
  }
  context.putImageData(imageData, 0, 0);
}

// Helper function to get a pixel from the image data array
function getPixel(data, x, y) {
  if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
    return 0;
  }
  const i = (y * canvas.width + x) * 4;
  return data[i];
}
