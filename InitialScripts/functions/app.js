try {
  hello.toUpperCase(); // Przykładowy błąd.
} catch {
  console.log("ERROR");
} finally {
  console.log("This will always show.");
}

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(e);
    console.log("please pass a string.");
  }
}
