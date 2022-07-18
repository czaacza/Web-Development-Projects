const firstBold = document.querySelector("b");
// element
console.log(firstBold);

// element's parent
console.log(firstBold.parentElement);

// element's parent's parent
console.log(firstBold.parentElement.parentElement);

// element's parent's parent's parent
console.log(firstBold.parentElement.parentElement.parentElement);

// paragraph's element children
const paragraph = firstBold.parentElement;
console.log(paragraph.children);
console.log(paragraph.children[0]);

const squareImg = document.querySelector(".square");

// nextSibling and previousSibling return text nodes
console.log(squareImg.nextSibling);
console.log(squareImg.previousSibling);

// these give us next real element siblings
console.log(squareImg.nextElementSibling);
console.log(squareImg.previousElementSibling);
