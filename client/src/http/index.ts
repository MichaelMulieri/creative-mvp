import { loadLocalData, saveLocalData } from "../utils";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBivSdtAPzumkYvh_5uqmhp2nHSrDdaUk",
  authDomain: "creative-mvp-705d1.firebaseapp.com",
  projectId: "creative-mvp-705d1",
  appId: "1:888309574487:web:d5186b5c6ddf36a6186c12",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const signUp = (userName: string, password: string) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, userName, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
};

export const fetchProjects = async () => {
  const projectsRef = doc(db, "test", "projects");
  let projects;

  try {
    const projectsSnap = await getDoc(projectsRef);

    projects = projectsSnap.data();
  } catch (error) {
    console.error(error);

    return { success: false, error: true, errorMsg: error };
  }

  return projects;
};

export const addProject = async (project: any) => {
  const projectsRef = doc(db, "test", "projects");

  try {
    await updateDoc(projectsRef, {
      [project.id]: project,
    });
  } catch (error) {
    console.error(error);

    return { success: false, error: true, errorMsg: error };
  }

  return { success: true, error: false };
};

export const fetchProject = async (id: string) => {
  const projectsRef = doc(db, "test", "projects");
  let projects;

  try {
    const projectsSnap = await getDoc(projectsRef);

    projects = projectsSnap.data();
  } catch (error) {
    console.error(error);

    return { success: false, error: true, errorMsg: error };
  }

  return projects?.[id] ?? {};
};

export const saveProject = async (project: any) => {
  const projectsRef = doc(db, "test", "projects");

  try {
    await updateDoc(projectsRef, {
      [project.id]: project,
    });
  } catch (error) {
    console.error(error);

    return { success: false, error: true, errorMsg: error };
  }

  return { success: true, error: false };
};

export const fetchIdeas = async () => {
  return loadLocalData("mockIdeas");
};

export const fetchIdea = async (id: string) => {
  const wordLadders = loadLocalData("mockIdeas");

  return wordLadders[id];
};

export const addIdea = async (idea: any) => {
  const ideasRef = doc(db, "test", "ideas");

  try {
    await updateDoc(ideasRef, {
      [idea.id]: idea,
    });
  } catch (error) {
    console.error(error);

    return { success: false, error: true, errorMsg: error };
  }

  return { success: true, error: false };
};

export const saveIdea = async (idea: any) => {
  const ideasRef = doc(db, "test", "ideas");

  try {
    await updateDoc(ideasRef, {
      [idea.id]: idea,
    });
  } catch (error) {
    console.error(error);

    return { success: false, error: true, errorMsg: error };
  }

  return { success: true, error: false };
};
