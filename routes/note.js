import express from "express";
import NoteController from "../controllers/note.js";

const router = express();

router.get(
    '/:noteId',
    NoteController.getNote,
);

router.put(
    '/:noteId',
    NoteController.editNote,
);

router.delete(
    '/:noteId',
    NoteController.deleteNote,
);

export default router;