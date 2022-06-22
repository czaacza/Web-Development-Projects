const list = [];
let command = prompt("What would you like to do?");
while (command !== "q" && command !== "quit") {
  command = prompt("What would you like to do?");
  if (command == "new") {
    const newItem = prompt("Enter a new Todo: ");
    list.push(newItem);
    console.log(newItem + " added to list.");
  } else if (command == "delete") {
    const removeIndex = prompt(
      "Enter an index of the item you want to remove:"
    );

    if (removeIndex >= 0 && removeIndex < list.length) {
      const deleted = list.splice(removeIndex, 1);
      console.log(deleted + " removed.");
    } else
      console.log(
        `I cannot remove item no. ${removeIndex}, index out of bounds.`
      );
  } else if (command == "list") {
    console.log("*********");
    for (let i = 0; i < list.length; i++) {
      console.log(i + ": " + list[i]);
    }
    console.log("*********");
  }
}
