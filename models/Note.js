var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteModal = new Schema({
    title: String,
    body: String
});

var Note = mongoose.model("Note", NoteModal);

module.exports = Note