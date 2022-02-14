import express from 'express';
import notes from './routes/notes.js';
import note from './routes/note.js';
import Mongoose from 'mongoose';
import { PORT, databaseURL } from './config.js'

const app = express()

app.use(express.json());
app.use('/api/notes', notes);
app.use('/api/note', note);

app.get(
    '/',
    (req, res) => {
        res.json('Server running peacefully on port ' + PORT + ' ...');
    }
);

Mongoose
    .connect(databaseURL + '/notes-app')
    .then(() => console.log('Connected to MongoDB Successfully .'))
    .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} ...`);
});

export default app;