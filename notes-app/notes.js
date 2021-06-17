const fs = require('fs')
const chalk = require('chalk');

const filePath = 'notes.json';

const getNotes = () => {
    const notes = loadNotes();
    notes.forEach(n => console.log(chalk.blue.inverse(n.title)));
}

const getNote = (title) => {

    const notes = loadNotes();
    const filteredNotes = notes.filter(n => n.title === title);
    if (filteredNotes.length !== 0) {
        console.log(chalk.green.inverse(filteredNotes[0].body));
    } else {
        console.error(chalk.red.inverse(`Note not exist with title: ${title}`));
    }
    console.log();
}

const addNote = (title, body) => {
    const notes = loadNotes()
    debugger;
    if (!notes.some(n => n.title === title)) {
        notes.push({title: title, body: body});
        fs.writeFileSync(filePath, JSON.stringify(notes));
    } else {
        console.error(chalk.red.inverse(`Note already exist with title: ${title}`));
    }
}

const deleteNote = (title) => {
    const notes = loadNotes()

    if (notes.some(n => n.title === title)) {
        const filteredNotes = notes.filter(n => n.title !== title);
        fs.writeFileSync(filePath, JSON.stringify(filteredNotes));
    } else {
        console.error(chalk.red.inverse(`Note not exist with title: ${title}`));
    }
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString())
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    deleteNote: deleteNote,
    getNote: getNote
}
