import { Router } from 'express';
import { Word } from '../data/interface';
import { getAllWords, resetStatistics, updateStatistics } from './methods';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const allWords = await getAllWords();
    return res.json(allWords);
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.put('/', async (req, res) => {
  const data = req.body as Word;
  try {
    const newData = await updateStatistics(data);
    return res.json(newData);
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.delete('/', async (req, res) => {
  try {
    const allWords = await resetStatistics();
    return res.json(allWords);
  } catch (e) {
    return res.status(400).send(e);
  }
});

export default router;
