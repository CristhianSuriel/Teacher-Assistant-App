const Notes = require('../models/notes');

exports.deleteNotes = async (req, res) => {
  try {
    const deletedNote = await Notes.findByIdAndDelete(req.params.id)

    res.send(deletedNote)
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
}