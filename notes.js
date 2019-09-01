const fs = require('fs');
const chalk = require('chalk');
const log = console.log;
const getNotes = function() {
  console.log('return notes');
  return "notes ..."
}

const listNotes = () => {
  log(chalk.inverse("Your notes"));
  const notes  = loadNotes();
  notes.map((item,index) => {
    log(chalk.blue.inverse((index+1)+". " + item.title));
  })
  
}

const readNote = () => {

}

const addNote = function(title,body) {
  const notes  = loadNotes();
  const duplicateNote = notes.find(function(item) {
    return item.title === title;
  })

  if(!duplicateNote) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    log(chalk.green.inverse('Note saved'));  
  } else{
    log(chalk.red.inverse('Note already present'));
  }
}

const removeNote = function(title) {
  const notes = loadNotes();
  log('removing notes', title);

  const arrayNoteRemoved = notes.filter(function(note) {
    return note.title !== title;
  });

  if(notes.length === arrayNoteRemoved.length) {
    log(chalk.red.inverse('No note found'));
  } else{
    log(chalk.green.inverse('Note removed'));
    saveNotes(arrayNoteRemoved);
  }
}

const saveNotes = function(notes)  {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return []
  }
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes
}