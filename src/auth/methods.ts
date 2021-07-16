import { auth } from '../data';
import { Auth } from '../data/interface';

export function getAuth(): Promise<Auth> {
  return Promise.resolve(auth);
}
