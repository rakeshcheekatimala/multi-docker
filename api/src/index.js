import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/hello', (req, res) => {
	res.json({ message: 'Hello world' });
});

app.get('/fruits', (req, res) => {
	let values = ['apple', 'mango', 'cherry', 'banana'];
	res.json(values);
});

app.listen(process.env.PORT, () =>
	console.log(`Example app listening on port ${process.env.PORT}!`),
);
