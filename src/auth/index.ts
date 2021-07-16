import { Router } from 'express';
import { getAuth } from './methods';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const auth = await getAuth();
    return res.json(auth);
  } catch (e) {
    return res.status(400).send(e);
  }
});

export default router;
