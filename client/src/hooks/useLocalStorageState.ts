import { useState, useEffect } from "react";
import { loadLocalData, saveLocalData } from "../utils";

import type { LocalStorageKey } from "../types";

const useLocalStorageState = (key: LocalStorageKey, defaultValue: any) => {
  const [state, setState] = useState(loadLocalData(key) || defaultValue);

  useEffect(() => {
    saveLocalData(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorageState;
