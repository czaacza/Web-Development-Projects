// FOR OF LOOP

const seatingChart = [
  ["Kristen", "Eric", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let row of seatingChart) {
  for (let seat of row) {
    console.log(`${seat} seats here`);
  }
}
