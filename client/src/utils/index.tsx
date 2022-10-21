import shuffle from "lodash.shuffle";

export const scrambleMap = (firstArr, secondArr) => {
  const scrambledSecondArray = shuffle(secondArr);
  return firstArr.map((item, index) => {
    return [item, scrambledSecondArray[index]];
  });
};

export const loadLocalData = (key) => {
  const savedData = JSON.parse(localStorage.getItem("create_mvp_1234")) || {};
  return savedData[key];
};

export const saveLocalData = (key, data) => {
  const savedData = JSON.parse(localStorage.getItem("create_mvp_1234")) || {};
  savedData[key] = data;
  localStorage.setItem("create_mvp_1234", JSON.stringify(savedData));
};
