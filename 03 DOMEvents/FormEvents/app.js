const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;

  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
  e.preventDefault();
});

const addTweet = function (username, tweet) {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(`${username}`);

  newTweet.append(bTag);
  newTweet.append(`: ${tweet}`);

  tweetsContainer.append(newTweet);
};

// exercise
const groceryForm = document.querySelector("#groceryForm");
const itemList = document.querySelector("#list");
console.log(groceryForm.elements);
groceryForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const product = groceryForm.elements.product;
  const quantity = groceryForm.elements.qty;

  addItem(product.value, quantity.value);
  product.value = "";
  quantity.value = "";
});

function addItem(productName, quantity) {
  const newItem = document.createElement("li");
  const itemName = document.createElement("b");
  itemName.append(`${productName}`);

  newItem.append(itemName);
  newItem.append(`: ${quantity} sztuk`);

  itemList.append(newItem);
}
