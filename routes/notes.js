import express from "express";
import NotesController from "../controllers/notes.js";

const router = express();

router.post(
    '/',
    NotesController.createNote,
);

router.get(
    '/',
    NotesController.getNotes,
);

export default router;