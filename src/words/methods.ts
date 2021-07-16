import categories from '../data';
import { Word } from '../data/interface';

export function getWords(categoryName: string): Promise<Array<Word> | undefined> {
  const category = categories[categoryName];
  if (category) {
    return Promise.resolve(category.words);
  }
  return Promise.reject();
}

export async function deleteWord(categoryName: string, name: string): Promise<Word[]> {
  const { words, length } = categories[categoryName];
  if (words && length !== undefined) {
    categories[categoryName].words = words.filter((word) => word.name !== name);
    categories[categoryName].length = length - 1;
    return Promise.resolve(categories[categoryName].words);
  }
  return Promise.reject();
}

export interface DataInterface {
  logo: string,
  name: string,
  oldName?: string,
  translation: string,
  sound: string,
}

export async function updateWord(categoryName: string, data: DataInterface): Promise<Word[]> {
  const { words } = categories[categoryName];
  const {
    oldName, logo, name, translation, sound,
  } = data;
  if (words) {
    categories[categoryName].words = words.map((word) => {
      if (word.name === oldName) {
        return {
          clicks: 0,
          correct: 0,
          wrong: 0,
          percent: 0,
          name,
          logo,
          translation,
          category: categoryName,
          sound,
        };
      }
      return word;
    });
    return Promise.resolve(categories[categoryName].words);
  }
  return Promise.reject();
}

export async function createWord(categoryName: string, data: DataInterface): Promise<Word[]> {
  const {
    name, translation, logo, sound,
  } = data;
  const { length } = categories[categoryName];
  const word = categories[categoryName].words.find((item) => item.name === name);
  if (!word) {
    categories[categoryName].words.push({
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
      name,
      logo,
      translation,
      category: categoryName,
      sound,
    });
    if (length) {
      categories[categoryName].length = length + 1;
    }
    return Promise.resolve(categories[categoryName].words);
  }
  return Promise.reject();
}
