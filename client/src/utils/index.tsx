import shuffle from "lodash.shuffle";
import type {
  LocalStorageData,
  LocalStorageItem,
  LocalStorageKey,
} from "../types";

export const scrambleMap = (
  firstArr: any[],
  secondArr: any[]
): [any, any][] => {
  const scrambledSecondArray: any[] = shuffle(secondArr);
  return firstArr.map((item: any, index: number) => {
    return [item, scrambledSecondArray[index]];
  });
};

export const loadLocalData = (key: LocalStorageKey): LocalStorageItem => {
  const savedData: LocalStorageData =
    JSON.parse(localStorage.getItem("create_mvp_1234") || "") || {};
  return savedData[key];
};

export const saveLocalData = (key: LocalStorageKey, data: LocalStorageItem) => {
  const savedData: LocalStorageData =
    JSON.parse(localStorage.getItem("create_mvp_1234") || "") || {};
  (savedData[key] as LocalStorageItem) = data;
  localStorage.setItem("create_mvp_1234", JSON.stringify(savedData));
};
