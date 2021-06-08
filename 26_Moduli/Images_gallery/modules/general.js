// Create image
function generateImage(source) {
  let image = document.createElement('img');
  image.src = source;
  image.alt = `The image could not be loaded`;
  return image;
}

export default generateImage;
