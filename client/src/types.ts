export type Words = string[]
export type ScrambledWords = [string, string][]

export type LocalStorageKey = "verbs" | "nouns" | "scrambledWords"

export type LocalStorageItem = Words | ScrambledWords | null
// why interface here?
export interface LocalStorageData {
    verbs: Words,
    nouns: Words,
    scrambledWords: ScrambledWords
}
