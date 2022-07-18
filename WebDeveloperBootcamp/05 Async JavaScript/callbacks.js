// nesting setTimeout inside setTimeout

// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow";
//     }, 1000);
//   }, 1000);
// }, 1000);

const delayedColorChange = (color, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    doNext && doNext();
  }, delay);
};

delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("yellow", 1000, () => {});
  });
});

searchMoviesAPI("amadeus", () => {
  saveToMyDB(
    movies,
    () => {
      // if it works, run this
    },
    () => {
      // if it doesn't work, run this
    }
  );
});
