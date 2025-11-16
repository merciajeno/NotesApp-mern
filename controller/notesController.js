const Note = require("../models/Note");
async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({createdAt:-1})
        res.status(200).json(notes);
    } catch (err) {
        console.log(err.message);
        res.status(400).send("Notes Not Found")
    }
}
async function getOneNote(req, res) {
    try{
        const note = await Note.findById(req.params.id)
        if(!note){res.status(404).send("Not Found")}
        res.status(200).json(note);

    }
    catch(err){
        console.log(err.message);
        res.status(404).send("Error")
    }
}
async function createNote(req, res) {
    try {
        const {title, content} = req.body;
        const newNote = new Note({title: title, content: content})
        await newNote.save()
        res.status(200).json(newNote)
    } catch (err) {
        console.log(err.message);
        res.status(400).send("Note Not Found")
    }
}

async function updateNote(req, res) {
    try {
        const {title, content} = req.body;
        await Note.findByIdAndUpdate(req.params.id,{title,content})
        res.status(200).json({"message":'Note Updated Successfully'})
    } catch (err) {
        console.log(err.message);
        res.status(400).send("Note Not Found")
    }
}

async function deleteNote(req, res) {
    try {

        await Note.findByIdAndDelete(req.params.id)
        res.status(200).json({"message": 'Note Deleted Successfully'})
    } catch (err) {
        console.log(err.message);
        res.status(400).send("Note Not Found")
    }
}
module.exports={
    getAllNotes,createNote,updateNote,deleteNote,getOneNote
}