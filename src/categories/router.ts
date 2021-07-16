import { Router } from 'express';
import { Category, NewCategory } from '../data/interface';
import {
  createCategory, deleteCategory, getCategories, getCategoryByName, updateCategory,
} from './methods';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const allCategories = await getCategories();
    return res.json(allCategories);
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.get('/:name', async (req, res) => {
  const { name } = req.params;
  if (!name) {
    return res.status(400);
  }
  const category = await getCategoryByName(name);
  if (!category) {
    return res.status(404);
  }
  return res.json(category);
});

router.post('/', async (req, res) => {
  const data = req.body as Category;
  try {
    const categories = await createCategory(data);
    return res.json(categories);
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.delete('/:name', async (req, res) => {
  const { name } = req.params;
  if (!name) {
    return res.status(404);
  }
  try {
    const categories = await deleteCategory(name);
    return res.json(categories);
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.put('/', async (req, res) => {
  const data = req.body as NewCategory;
  try {
    const categories = await updateCategory(data);
    return res.json(categories);
  } catch (e) {
    return res.status(400).send(e);
  }
});

export default router;
