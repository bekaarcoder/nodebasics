const fs = require("fs");

const getNotes = () => {
  return fs.readFileSync("notes.txt", "utf8");
};

module.exports = getNotes;
