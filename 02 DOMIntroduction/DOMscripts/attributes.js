console.log(document.querySelector("#banner").src);

const firstLink = document.querySelector("a");
console.log(firstLink.href);
console.log(firstLink.getAttribute("href"));
firstLink.setAttribute("href", "www.google.com");

const secondInput = document.querySelector('input[type="text"]');
console.log(secondInput.getAttribute("type"));
secondInput.type = "password";
secondInput.type = "color";
secondInput.setAttribute("type", "text");

// exercise
const image = document.querySelector("img");
image.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1556316918-880f9e893822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
);
image.setAttribute("alt", "chicken");
