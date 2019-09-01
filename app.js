const getNotes = require('./notes.js');
const validator = require('validator')
const chalk = require('chalk');
const yargs =  require('yargs');

const log = console.log;

//Add command
yargs.command({
  command: 'add',
  describe:'Add a new note',
  builder:{
    title: {
      describe:"Note the title",
      demandOption:true,
      type:'string',
    },
    body: {
      describe: "Add the body of note",
      demandOption:true,
      type:'string',
    }
  },
  handler: function(argv) {
    log("Adding a new note", argv);
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


yargs.parse();

// log(yargs.argv);


// log(chalk.red('hello' + getNotes()));

// log(process.argv[2], process.argv);

// log(yargs.argv);
