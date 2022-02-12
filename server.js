import express from 'express';
import notes from './routes/notes.js';
import note from './routes/note.js';

import { PORT } from './config.js'

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

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} ...`);
});

export default app;