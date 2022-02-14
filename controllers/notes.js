import moment from "moment";
import { v4 as uuid } from 'uuid';
import Note from "../models/note.js";

export default class NotesController {
    static createNote(req, res) {
        const { title, description } = req.body;
        const timestamp = moment().unix();
        const noteId = uuid();

        Note
            .create({
                noteId,
                title,
                description,
                timestamp
            })
            .then(() => {
                res.status(200).json({
                    success: true,
                    result: {
                        message: 'Note Created',
                        noteId
                    }
                });
            })
            .catch((err) => console.log(err));
    }

    static getNotes(req, res) {
        Note.find()
            .select('title description timestamp -_id')
            .then((result) => {
                res.status(200).json({
                    success: true,
                    result
                });
            })
            .catch((err) => console.log(err));
    }
}