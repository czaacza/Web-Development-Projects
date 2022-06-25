const myMath = {
  PI: 3.14,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num * num * num;
  },
};

// exercise
const square = {
  area(sideLength) {
    return sideLength * sideLength;
  },
  perimeter(sideLength) {
    return sideLength * 4;
  },
};

console.log(square.area(10)); //100
console.log(square.perimeter(10)); //40
