export type Project = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  fragments: string[];
  content: string;
  description: string;
};

export type Projects = {
  [projectId: string]: Project;
};

export type Data = {
  projects: Projects;
};

export const mockData = {
  projects: {
    1: {
      id: "1",
      name: "mock project 1",
      createdAt: "1/1/1",
      updateAt: "2/2/2",
      fragments: [],
      content: "lorum ipsum undum",
      description: "description sdasdsadasdasdasdasd",
    },
    2: {
      id: "2",
      name: "mock project 2",
      createdAt: "1/1/12",
      updateAt: "2/2/23",
      fragments: [],
      content: "lorum ipsum undum project 2",
      description: "description sdasdsadasdasdasdasd project 2",
    },
  },
};
