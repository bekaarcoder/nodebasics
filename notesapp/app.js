const notes = require("./notes");
const yargs = require("yargs");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.removeNotes(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function() {
    notes.listNotes();
  }
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.readNotes(argv.title);
  }
});

yargs.parse();
// console.log(yargs.argv);
