console.log(document.querySelector("p"));
// gives us only the first match

console.log(document.querySelector("#banner"));
console.log(document.querySelector(".square"));

console.log(document.querySelector("img:nth-of-type(2)"));

// <a> element with title "java"
console.log(document.querySelector('a[title="Java"]'));

// querySelectorAll gives us collection of ALL matches
const allLinks = document.querySelectorAll("p a");

for (let link of allLinks) {
  console.log(link.href);
}
