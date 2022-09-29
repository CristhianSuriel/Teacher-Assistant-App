const express = require('express');
const router = express.Router();

// import controllers
const { getPassData, getNotes } = require('../controllers/get-data');
const { createNotes } = require('../controllers/post-data');
const { deleteNotes } = require('../controllers/delete-data');
const { updateNotes } = require('../controllers/put-data');

// import middleware

// api routes
router.get('/pass-data', getPassData);
router.route('/notes')
  .get(getNotes)
  .post(createNotes)
router.route('/notes/:id')
  .delete(deleteNotes)
  .put(updateNotes)

module.exports = router;