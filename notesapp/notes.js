const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "You notes...";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => {
    return note.title === title;
  });

  debugger;

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added."));
  } else {
    console.log(
      chalk.red.inverse("Already a note with the same title has been added.")
    );
  }
};

const removeNotes = title => {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log("No notes to remove");
  } else {
    const filteredNotes = notes.filter(note => {
      return note.title !== title;
    });
    if (filteredNotes.length === notes.length) {
      console.log("No notes found with this title");
    } else {
      saveNotes(filteredNotes);
      console.log("Note removed");
    }
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue("Your Notes"));
  notes.forEach((note, i) => {
    console.log(i + 1 + ". " + note.title);
  });
};

const readNotes = title => {
  const notes = loadNotes();
  const findNote = notes.find(note => note.title === title);
  if (findNote === undefined) {
    console.log(chalk.red.inverse("No note found."));
  } else {
    console.log(chalk.bold(findNote.title));
    console.log(findNote.body);
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes
};
