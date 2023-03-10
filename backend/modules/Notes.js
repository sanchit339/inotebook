const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    //  associating the notes with the user  (notes belong to which user) 
    user:{
        type: mongoose.Schema.Types.ObjectId, // // forign key to store notes of particular user 
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('notes', NotesSchema);