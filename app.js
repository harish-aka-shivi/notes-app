const getNotes = require('./notes.js');
const validator = require('validator')
const chalk = require('chalk');
const yargs =  require('yargs');
const log = console.log;

//Add command
yargs.command({
  command: 'add',
  describe:'Add a new note',
  handler: function() {
    log("Adding a new note");
  }
})

//remove command
yargs.command({
  command: 'remove',
  describe:'Remove a note',
  handler: function() {
    log("Removing a note");
  }
})

//list notes command
yargs.command({
  command: 'list',
  describe:'List the notes',
  handler: function() {
    log("Listing the notes");
  }
})

//Read a note
yargs.command({
  command: 'read',
  describe:'Reading a note',
  handler: function() {
    log("Reading a note");
  }
})


log(yargs.argv);


// log(chalk.red('hello' + getNotes()));

// log(process.argv[2], process.argv);

// log(yargs.argv);
