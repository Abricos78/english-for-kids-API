import categories from '../data';
import { Category, NewCategory } from '../data/interface';
import { getCategoriesFromData } from '../utills';

export function getCategories(): Promise<Category[]> {
  return Promise.resolve(getCategoriesFromData());
}

export function getCategoryByName(name: string): Promise<Category | undefined> {
  return Promise.resolve(categories[name]);
}

export async function createCategory(data: Category): Promise<Category[]> {
  const { name } = data;
  if (categories[name]) {
    return Promise.reject(new Error(`Category with name ${name} is already exists`));
  }
  const updateData = {
    ...data,
    length: 0,
    words: [],
  };
  categories[name] = updateData;
  return Promise.resolve(await getCategories());
}

export async function deleteCategory(name: string): Promise<Category[]> {
  const isCategory = categories[name];
  if (!isCategory) {
    return Promise.reject(new Error(''));
  }
  delete categories[name];
  return Promise.resolve(await getCategories());
}

export async function updateCategory({ name, newName }: NewCategory): Promise<Category[]> {
  categories[newName] = { ...categories[name], name: newName };
  console.log(name);
  delete categories[name];
  categories[newName].words.forEach((word) => {
    word.category = newName;
  });
  return Promise.resolve(await getCategories());
}
