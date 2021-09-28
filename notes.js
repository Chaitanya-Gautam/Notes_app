const { fstat } = require("fs");
const chalk = require("chalk");

const fs = require('fs');

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.txt'));
  } catch (err) {
    return [];
  }
}

var addingNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body
  };

  var double = notes.filter((note) => note.title === title);
//add
  if(double.length === 0){
    notes.push(note);

    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    console.log(chalk.green.inverse("New NOTE created."));

    logNote(note);
  } 
  else {
    console.log(chalk.red.inverse("OOPS! Title already exists."));
  }
}
//remove
var removeNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title !== title);

  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
  console.log(chalk.red.inverse("Note removed"));
}
//read
var readNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title === title);

  logNote(filteredNotes[0]);
  console.log(chalk.blue.inverse("Your notes:"));
}
//list
var getAll = () => {
  var notes = fetchNotes();
  console.log(chalk.yellow.inverse("Your Notes:"));
  notes.forEach((note) => logNote(note));
 
}

var logNote = (note) => {
  
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}


module.exports = {
  addingNote,
  removeNote,
  readNote,
  getAll
}
