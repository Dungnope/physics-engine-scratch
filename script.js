const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

function drawBall(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();
}

drawBall(130, 230, 30);
drawBall(230, 130, 10);
