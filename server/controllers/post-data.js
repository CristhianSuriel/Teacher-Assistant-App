const Notes = require('../models/notes');

exports.createNotes = async (req, res) => {
  // creates instance of the model(class) and applies inputs
  let note = new Notes({
    subject: req.body.subject,
    text: req.body.text,
    date: req.body.date
  })

  // try to save the note then show note or if error show error
  try {
    note = await note.save()
    res.send(note)
  } catch (error) {
    res.status(500).send(error.message)
    console.log(error)
  }
}