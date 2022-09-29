const Notes = require('../models/notes');

exports.getPassData = async (req, res) => {
  res.status(200).json({
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    num: "0123456789",
    sChar: "!#$&@?.",
  })
}
exports.getNotes = async (req, res) => {
  const allNotes = await Notes.find();
  res.send(allNotes)
}