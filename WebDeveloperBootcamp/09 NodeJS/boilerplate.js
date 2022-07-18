const fs = require("fs");
// fs.mkdir("Dogs", { recursive: true }, (err) => {
//   console.log("in the callback");
//   if (err) throw err;
// });

const folderName = process.argv[2] || "Project";

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`./${folderName}/index.html`);
  fs.writeFileSync(`./${folderName}/app.js`);
  fs.writeFileSync(`./${folderName}/styles.css`);
} catch (e) {
  console.log(e, "error");
}
