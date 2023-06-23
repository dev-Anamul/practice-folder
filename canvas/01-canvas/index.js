// buttons
const btnOne = document.getElementById("btn-1");
const btnTwo = document.getElementById("btn-2");
const btnThree = document.getElementById("btn-3");
const takeImg = document.getElementById("take-img");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1500;
canvas.height = 800;

// move canvas to center of screen
canvas.style.margin = "auto auto";
canvas.style.display = "block";

// draw line
// ctx.beginPath();
// ctx.strokeStyle = "red";
// ctx.lineWidth = 3;
// ctx.moveTo(100, 100);
// ctx.lineTo(300, 400);
// ctx.lineTo(500, 100);
// ctx.lineTo(700, 400);
// ctx.lineTo(900, 100);
// ctx.lineTo(1100, 400);
// ctx.lineTo(1300, 100);
// ctx.stroke();

// draw line
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;
ctx.moveTo(750, 290);
ctx.lineTo(750, 450);
ctx.lineTo(790, 310);
ctx.lineTo(750, 450);
ctx.lineTo(710, 310);
ctx.lineTo(750, 450);
ctx.lineTo(750, 650);
ctx.stroke();

drawCircle(ctx, 750, 200, 60, "red");
drawCircle(ctx, 700, 270, 55, "green");
drawCircle(ctx, 800, 270, 55, "yellow");

// colors
let color1 = "red";
let color2 = "green";
let color3 = "yellow";

btnOne.addEventListener("click", () => {
  const color1 = getRandomColor();
  drawCircle(ctx, 750, 200, 60, color1);
  drawCircle(ctx, 700, 270, 55, color2);
  drawCircle(ctx, 800, 270, 55, color3);
});

btnTwo.addEventListener("click", () => {
  const color2 = getRandomColor();
  drawCircle(ctx, 750, 200, 60, color1);
  drawCircle(ctx, 700, 270, 55, color2);
  drawCircle(ctx, 800, 270, 55, color3);
});

btnThree.addEventListener("click", () => {
  const color3 = getRandomColor();
  drawCircle(ctx, 750, 200, 60, color1);
  drawCircle(ctx, 700, 270, 55, color2);
  drawCircle(ctx, 800, 270, 55, color3);
});

function drawCircle(ctx, x, y, radius, color) {
  ctx.beginPath(); // Begin a new path
  ctx.arc(x, y, radius, 0, Math.PI * 2); // Add a circular arc to the path
  ctx.fillStyle = color; // Set the fill color of the path
  ctx.shadowColor = "black";
  ctx.shadowBlur = 5;

  ctx.fill(); // Fill the path with the current fill color
  ctx.closePath(); // Close the current path
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// function getCanvasImage(canvas) {
//   return canvas.toDataURL();
// }

function getCanvasImage(canvas, type, quality) {
  const dataURL = canvas.toDataURL(type, quality);
  const binary = atob(dataURL.split(",")[1]);
  const array = [];
  for (let i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Blob([new Uint8Array(array)], { type: type || "image/png" });
}
// take the imag
takeImg.addEventListener("click", () => {
  const img = getCanvasImage(canvas);
  console.log(img);
});

/// balloon canvas
function drawBalloon(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Balloon string
  context.beginPath();
  context.moveTo(canvas.width / 2, canvas.height);
  context.lineTo(canvas.width / 2, canvas.height - 100);
  context.strokeStyle = "black";
  context.lineWidth = 2;
  context.stroke();

  // Balloon body
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height - 100, 50, 0, Math.PI * 2, false);
  context.fillStyle = "red";
  context.fill();
  context.strokeStyle = "black";
  context.lineWidth = 2;
  context.stroke();
}

// drawBalloon(ctx);

function draw3DArc(
  centerX,
  centerY,
  radius,
  startAngle,
  endAngle,
  height,
  context
) {
  const startX = centerX + radius * Math.cos(startAngle);
  const startY = centerY + radius * Math.sin(startAngle);
  const endX = centerX + radius * Math.cos(endAngle);
  const endY = centerY + radius * Math.sin(endAngle);
  const controlX = centerX + radius * Math.cos((startAngle + endAngle) / 2);
  const controlY = centerY + radius * Math.sin((startAngle + endAngle) / 2);

  context.beginPath();
  context.moveTo(startX, startY);
  context.fillStyle = "red";
  context.quadraticCurveTo(controlX, controlY - height, endX, endY);
  context.stroke();
}

// Usage example
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 100;
const startAngle = Math.PI / 4;
const endAngle = (Math.PI * 3) / 4;
const height = 30;

// draw3DArc(centerX, centerY, radius, startAngle, endAngle, height, ctx);
