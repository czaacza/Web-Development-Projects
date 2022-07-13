const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("YOUR FAKE DATA HERE");
      }
      reject("REQUEST ERROR!");
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then((data) => {
    console.log("done with request!");
    console.log("your data: " + data);
  })
  .catch((err) => {
    console.log(err);
  });

// delayed color change using promises

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

delayedColorChange("red", 1000)
  .then(() => {
    return delayedColorChange("orange", 1000);
  })
  .then(() => {
    return delayedColorChange("yellow", 1000);
  })
  .then(() => {
    return delayedColorChange("violet", 1000);
  })
  .then(() => {
    return delayedColorChange("green", 1000);
  })
  .then(() => {
    return delayedColorChange("blue", 1000);
  });
