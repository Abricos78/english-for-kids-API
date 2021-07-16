import { Router } from 'express';
import {
  createWord,
  DataInterface, deleteWord, getWords, updateWord,
} from './methods';

const router = Router();

router.get('/:categoryName', async (req, res) => {
  const { categoryName } = req.params;
  try {
    const words = await getWords(categoryName);
    return res.json(words);
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.delete('/:categoryName/:name', async (req, res) => {
  const { categoryName, name } = req.params;
  try {
    const words = await deleteWord(categoryName, name);
    return res.json(words);
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.put('/:categoryName', async (req, res) => {
  const { categoryName } = req.params;
  const body = req.body as DataInterface;
  try {
    const words = await updateWord(categoryName, body);
    return res.json(words);
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.post('/:categoryName', async (req, res) => {
  const { categoryName } = req.params;
  const body = req.body as DataInterface;
  try {
    const words = await createWord(categoryName, body);
    return res.json(words);
  } catch (e) {
    return res.status(400).send(e);
  }
});

export default router;
