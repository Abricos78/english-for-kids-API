export interface Word {
  name: string,
  translation: string,
  logo: string,
  clicks: number,
  correct: number,
  wrong: number,
  percent: number,
  category: string,
  sound?: string
}

export interface Categories {
  [key: string]: Category
}

export interface Category {
  name: string,
  logo?: string,
  length?: number,
  words: Word[]
}

export interface NewCategory {
  name: string,
  logo?: string,
  newName: string
}

export interface Auth {
  name: string,
  password: string
}
