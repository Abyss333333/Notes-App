const fs = require('fs')
const chalk = require('chalk')

const getNotes  = () => {
    return ('Your Notes...')
}
const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    debugger 


    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New Note Added'))
    }

    else {
        console.log(chalk.bgRed('Note Title Taken'))
    }
    

    
}

const removeNote =  (title) => {
    

    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    

    if (notes.length === notesToKeep.length) {
        console.log(chalk.bgRed("Title Not Found"))
    } else {
        console.log(chalk.bgGreen('Note Removed'))
        saveNotes(notesToKeep)
    }
    
}

const listNotes = () => {
    console.log(chalk.blue.bgWhite('Your Notes'))

    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(chalk.green.bgBlue(note.title))

    })
}


const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}
const loadNotes =  () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

    
}

const readNote = (title) => {

    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (!note) {
        console.log(chalk.bgRed ('Note not Found'))
    } else {
        console.log(chalk.bold.black.bgWhite(note.title))
        console.log(note.body)

    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}