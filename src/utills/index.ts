import categories from '../data';
import { Category } from '../data/interface';

export function getCategoriesFromData(): Category[] {
  const categoriesName = Object.keys(categories);
  return categoriesName.map((name) => ({
    name,
    logo: categories[name].logo,
    length: categories[name].length,
    words: categories[name].words,
  }));
}
