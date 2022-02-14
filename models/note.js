import Mongoose from 'mongoose';

const noteSchema = new Mongoose.Schema({
    noteId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Number,
        required: true,
    },
});

const Note = Mongoose.model('Note', noteSchema);

export default Note;