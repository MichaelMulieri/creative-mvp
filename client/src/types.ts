export type Words = string[]
export type ScrambledWords = [string, string][]

export type LocalStorageKey = "verbs" | "nouns" | "scrambledWords"

export type LocalStorageItem = Words | ScrambledWords

export interface LocalStorageData {
    verbs: Words,
    nouns: Words,
    scrambledWords: ScrambledWords
}
