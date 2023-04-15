import { loadLocalData, saveLocalData } from "../utils";

export const fetchProjects = async () => {
  return loadLocalData("mockHttpProjects");
};

export const addProject = async (project: any) => {
  const projects = loadLocalData("mockHttpProjects");
  projects[project.id] = project;

  saveLocalData("mockHttpProjects", projects);

  return { success: true, error: false };
};

export const fetchProject = async (id: string) => {
  const projects = loadLocalData("mockHttpProjects");

  return projects[id];
};
