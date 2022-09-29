const Notes = require('../models/notes');

exports.updateNotes = async (req, res) => {
  const note = await Notes.findById(req.params.id)

  try {
    // try to save the note then show note or if error show error
    const updatedNote = await Notes.findByIdAndUpdate(req.params.id, {
      subject: req.body.subject,
      text: req.body.text,
      date: req.body.date
    }, { new: true });
    res.send(updatedNote)
  } catch (error) {
    res.status(500).send(error.message)
    console.log(error)
  }
}