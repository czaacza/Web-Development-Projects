// SCOPE
let totalEggs = 0;

function collectEggs() {
  totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);

let bird = "Scarlet Macaw";
function birdWatch() {
  let bird = "Grat Blue Heron";
}
console.log(bird);

// BLOCK SCOPE
let radius = 8;
if (radius > 0) {
  const PI = 3.14159;
  let msg = "HII!";
}

console.log(radius);
// console.log(PI); I CANNOT REACH THAT because of block SCOPE

// LEXICAL SCOPE
function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batwoman"];
  function cryForHelp() {
    {
      function inner() {
        for (let hero of heroes) {
          console.log(`PLEASE HELP US ${hero.toUpperCase()}`);
        }
      }
    }
    inner();
  }
  cryForHelp();
}
