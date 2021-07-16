import { Word } from '../data/interface';
import { getAllWords } from '../statistics/methods';

export async function getDifficultWords(): Promise<Word[] | []> {
  const allWords = await getAllWords();
  allWords.sort((a, b) => a.percent - b.percent);
  return allWords.reduce((acc: Word[], word: Word) => {
    if (word.percent > 0) {
      acc.push(word);
    }
    return acc;
  }, []).slice(0, 8);
}
