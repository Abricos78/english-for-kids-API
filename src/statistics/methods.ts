import categories from '../data';
import { Word } from '../data/interface';

export function getAllWords(): Promise<Word[]> {
  const categoriesName = Object.keys(categories);
  const words = categoriesName.reduce((acc: Word[], category) => {
    acc.push(...categories[category].words);
    return acc;
  }, []);
  return Promise.resolve(words);
}

export async function updateStatistics(word: Word): Promise<Word[]> {
  const { category, name } = word;
  categories[category].words = categories[category].words.map((item) => {
    if (item.name === name) {
      return word;
    }
    return item;
  });
  return Promise.resolve(await getAllWords());
}

export async function resetStatistics(): Promise<Word[]> {
  const allCategories = Object.keys(categories);
  allCategories.forEach((name) => {
    categories[name].words = categories[name].words.map((word) => ({
      ...word, correct: 0, wrong: 0, clicks: 0, percent: 0,
    }));
  });
  return Promise.resolve(await getAllWords());
}
