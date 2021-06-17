const fs = require('fs')
const name = require('./utils')
const validator = require('validator');

const getNotes = require('./notes')

fs.appendFileSync('notes.txt', getNotes() + name )

const mail = 'tolga.tuna@hotmail.com'
console.log(`Is '${mail}' mail: `, validator.isEmail(mail));

const anotherMail = 'tolga.tuna@hotmaicom'
console.log(`Is '${anotherMail}' mail: `, validator.isEmail(anotherMail));
