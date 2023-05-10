// get the canvas element and its context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// define an array to store triangle data
var triangles = [];

// define a function to draw a rotated triangle with stroke
function drawRotatedTriangle(x, y, rotation) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.beginPath();
  ctx.moveTo(-50, -50);
  ctx.lineTo(50, -50);
  ctx.lineTo(0, 50);
  ctx.closePath();
  ctx.strokeStyle = "#FF0000";
  ctx.stroke();
  ctx.restore();
}

// add event listener for mouse move
canvas.addEventListener("mousemove", function(event) {
  var x = event.clientX - canvas.offsetLeft;
  var y = event.clientY - canvas.offsetTop;
  var rotation = Math.random() * Math.PI * 2; // random rotation between 0 and 2*pi
  triangles.push({x: x, y: y, rotation: rotation});
});

// define a function to redraw all triangles
function redrawTriangles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < triangles.length; i++) {
    var triangle = triangles[i];
    drawRotatedTriangle(triangle.x, triangle.y, triangle.rotation);
  }
}

// add event listener for window resize
window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  redrawTriangles();
});

// start animation loop
function animate() {
  requestAnimationFrame(animate);
  redrawTriangles();
}

animate();
