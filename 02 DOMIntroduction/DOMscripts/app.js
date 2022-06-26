console.log(document.querySelector("#banner").src);

const firstLink = document.querySelector("a");
console.log(firstLink.href);
console.log(firstLink.getAttribute("href"));
firstLink.setAttribute("href", "www.google.com");

const secondInput = document.querySelector('input[type="text"]');
secondInput.type = "password";
secondInput.type = "color";
secondInput.setAttribute("type", "text");
