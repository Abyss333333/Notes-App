const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./Notes.js')

// customize Yargs version

yargs.version('1.1.0')

//create add commang

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'

        },

        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})


//  create a remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.removeNote(argv.title)
    }
})

// create a list command

yargs.command({
    command: 'list',
    describe: 'list the note',
    handler () {
        notes.listNotes()
    }
})

// create a read command

yargs.command({
    command: 'read',
    describe: 'read notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string' 
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// add, remove, read, list


yargs.parse()
