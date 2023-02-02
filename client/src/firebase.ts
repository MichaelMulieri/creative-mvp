import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
// import * as dotenv from "dotenv";

// dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyDBivSdtAPzumkYvh_5uqmhp2nHSrDdaUk",
  authDomain: "creative-mvp-705d1.firebaseapp.com",
  projectId: "creative-mvp-705d1",
  appId: "1:888309574487:web:d5186b5c6ddf36a6186c12",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getAllDocuments = async () => {
  const data = await getDocs(collection(db, "test"));
  const documents: any = [];

  data.forEach((doc) => {
    documents.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return documents;
};

export const setWordLadder = async () => {
  await setDoc(doc(db, "test", "wordladder_id_1"), {
    name: "my cool project",
    nouns: ["CA", "noun2"],
    cverbs: ["USA", "verb2"],
  });
};
