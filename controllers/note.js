import Note from "../models/note.js";
import moment from "moment";

export default class NoteController {
    static getNote(req, res) {
        const { noteId } = req.params;

        Note
            .findOne({ noteId })
            .select('-_id -__v')
            .then((result) => {
                console.log(result);
                res.status(200).json({
                    success: true,
                    result
                });
            })
            .catch((err) => console.log(err));
    }
    
    static editNote(req, res) {
        const { noteId } = req.params;
        const { title, description } = req.body;
        const timestamp = moment().unix();

        const update = {
            title,
            description,
            timestamp
        };

        Note
            .findOneAndUpdate({ noteId }, update, { new: true })
            .select('-_id -__v')
            .then((result) => {
                console.log(result);
                res.status(200).json({
                    success: true,
                    result
                });
            })
            .catch((err) => console.log(err));
    }
    
    static deleteNote(req, res) {
        const { noteId } = req.params;

        Note
            .remove({ noteId })
            .then(() => {
                res.status(200).json({
                    success: true,
                    result: {
                        message: 'Note Deleted'
                    }
                });
            })
            .catch((err) => console.log(err));
    }
}