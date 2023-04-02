export type Words = string[];
export type ScrambledWords = [string, string][];

export type LocalStorageKey =
  | "verbs"
  | "nouns"
  | "scrambledWords"
  | "mockHttpProjects";

export type LocalStorageItem = Words | ScrambledWords | any;
export interface LocalStorageData {
  verbs: Words;
  nouns: Words;
  scrambledWords: ScrambledWords;
  mockHttpProjects: any;
}
