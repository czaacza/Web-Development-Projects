const allImages = document.getElementsByTagName("img");
console.dir(allImages[0]);
console.log(allImages.length);

for (let image of allImages) {
  console.log(image.src);
}

const squareImages = document.getElementsByClassName("square");
console.log(squareImages);
for (img of squareImages) {
  img.src =
    "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
}
