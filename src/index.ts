import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import categories from './categories/router';
import words from './words/router';
import statistics from './statistics/router';
import difficult from './difficultWords/router';
import auth from './auth';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', categories);

app.use('/api/difficult/', difficult);

app.use('/api/statistics/', statistics);

app.use('/api/categories/', words);

app.use('/api/auth/', auth);

app.listen(3030, () => console.log('Server started on http://localhost:3030'));
