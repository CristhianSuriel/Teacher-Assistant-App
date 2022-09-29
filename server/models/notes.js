//imports
const mongoose = require("mongoose");

// creating schema (structure of the document)
// MongoDB uses collections and documents instead of tables and rows
const noteSchema = new mongoose.Schema({
  subject: String,
  text: String,
  date: String
});

// Create a Mongoose model
// helps us interact with the database
const Notes = mongoose.model('Notes', noteSchema);

//exports model
module.exports = Notes;