import { Router } from 'express';
import { getDifficultWords } from './methods';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const difficultWords = await getDifficultWords();
    return res.json(difficultWords);
  } catch (e) {
    return res.status(400).send(e);
  }
});

export default router;
