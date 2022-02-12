import express, { json } from 'express';

const app = express()
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} ...`);
});