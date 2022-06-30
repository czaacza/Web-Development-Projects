const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// change (need to be confirmed)
input.addEventListener("change", () => {
  console.log("changed");
});

// input change (does not have to be confirmed)
input.addEventListener("input", (e) => {
  h1.innerText = input.value;
});

// exercise
const welcomeH1 = document.querySelector("#welcome");
const usernameInput = document.querySelector("#username");

usernameInput.addEventListener("input", () => {
  if (usernameInput.value.length > 0) {
    welcomeH1.innerText = `Welcome ${usernameInput.value}!`;
  } else {
    welcomeH1.innerText = "Enter Your Username";
  }
});
