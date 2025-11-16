const express = require('express');
const {getAllNotes, createNote,updateNote,deleteNote, getOneNote} = require("../controller/notesController");

const router = express.Router();

router.get('/', getAllNotes)
router.get('/:id',getOneNote)
router.post('/', createNote)

router.put('/:id',updateNote )

router.delete('/:id', deleteNote)
module.exports = router;