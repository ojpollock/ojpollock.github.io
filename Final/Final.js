const images = ["/Image/OLDMAIN-31.jpg", "/Image/OLDMAIN-37.jpg", "/Image/OLDMAIN-69.jpg", "/Image/OLDMAIN-71.jpg", "/Image/OLDMAIN-72.jpg", "/Image/OLDMAIN-79.jpg"];

function randomize() {
  const container = document.getElementById("image-container");
  container.innerHTML = "";
  const img1 = images[Math.floor(Math.random() * images.length)];
  const img2 = images[Math.floor(Math.random() * images.length)];
  const blendMode1 = getBlendMode();
  const blendMode2 = getBlendMode();
  const imageContainer = createImageContainer();
  const image1 = createImageElement(img1, blendMode1);
  const image2 = createImageElement(img2, blendMode2);
  imageContainer.appendChild(image1);
  imageContainer.appendChild(image2);
  container.appendChild(imageContainer);
}

function createImageContainer() {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.height = "100%";
  container.style.width = "100%";

  return container;
}

function createImageElement(imageSrc, blendMode) {
  const img = document.createElement("img");
  img.src = imageSrc;
  img.style.mixBlendMode = blendMode;
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover"; // Add this line
  img.style.position = "absolute";
  img.style.top = "auto"; // Change from "auto" to "0"
  img.style.left = "center"; // Change from "center" to "0"
  return img;
}


function getBlendMode() {
  const blendModes = [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity"
  ];
  return blendModes[Math.floor(Math.random() * blendModes.length)];
}


