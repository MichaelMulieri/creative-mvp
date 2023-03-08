import WordLadderForm from "./components/modules/WordLadderForm";

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

export type Wordladder = {
  id: string;
  name: string;
  wordPairs: { noun: string; verb: string }[];
};

export type Wordladders = {
  [wordladderId: string]: Wordladder;
};

export type Data = {
  projects: Projects;
  wordladders: Wordladders;
};

export const mockData: Data = {
  projects: {
    1: {
      id: "1",
      name: "mock project 1",
      createdAt: "1/1/1",
      updatedAt: "2/2/2",
      fragments: [],
      content: "lorum ipsum undum lorum ipsum undum",
      description:
        "description sdasdsadasdasdasdasddescription sdasdsadasdasdasdasd",
    },
    2: {
      id: "2",
      name: "mock project 2",
      createdAt: "1/1/12",
      updatedAt: "2/2/23",
      fragments: [],
      content: "lorum ipsum undum project 2",
      description: "description sdasdsadasdasdasdasd",
    },
    3: {
      id: "3",
      name: "mock project 3",
      createdAt: "1/7/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 2",
      description: "description sdasdsadasdasdasdasd",
    },
    4: {
      id: "4",
      name: "mock project 4",
      createdAt: "1/9/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 4",
      description: "description sdasdsadasdasdasdasd",
    },
    5: {
      id: "5",
      name: "mock project 5",
      createdAt: "1/7/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 5",
      description: "description sdasdsadasdasdasdasd",
    },
    6: {
      id: "6",
      name: "mock project 6",
      createdAt: "1/7/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 6",
      description: "description sdasdsadasdasdasdasd",
    },
    7: {
      id: "7",
      name: "mock project 7",
      createdAt: "1/7/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 7",
      description: "description sdasdsadasdasdasdasd",
    },
    8: {
      id: "8",
      name: "mock project 8",
      createdAt: "1/7/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 8",
      description: "description sdasdsadasdasdasdasd",
    },
    9: {
      id: "9",
      name: "mock project 9",
      createdAt: "1/7/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 9",
      description: "description sdasdsadasdasdasdasd",
    },
    10: {
      id: "10",
      name: "mock project 10",
      createdAt: "1/7/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 10",
      description: "description sdasdsadasdasdasdasd",
    },
    11: {
      id: "11",
      name: "mock project 11",
      createdAt: "1/7/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 11",
      description: "description sdasdsadasdasdasdasd",
    },
    12: {
      id: "12",
      name: "mock project 12",
      createdAt: "1/7/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 12",
      description: "description sdasdsadasdasdasdasd",
    },
    13: {
      id: "13",
      name: "mock project 13",
      createdAt: "1/7/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 13",
      description: "description sdasdsadasdasdasdasd",
    },
    14: {
      id: "14",
      name: "mock project 14",
      createdAt: "1/7/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 14",
      description: "description sdasdsadasdasdasdasd",
    },
    15: {
      id: "15",
      name: "mock project 15",
      createdAt: "1/7/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 15",
      description: "description sdasdsadasdasdasdasd",
    },
    16: {
      id: "16",
      name: "mock project 16",
      createdAt: "1/7/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 16",
      description: "description sdasdsadasdasdasdasd",
    },
    17: {
      id: "17",
      name: "mock project 17",
      createdAt: "1/7/12",
      updatedAt: "2/8/23",
      fragments: [],
      content: "lorum ipsum undum project 17",
      description: "description sdasdsadasdasdasdasd",
    },
  },
  wordladders: {
    1: {
      id: "1",
      name: "ladders1",
      wordPairs: [
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
      ],
    },
    2: {
      id: "2",
      name: "ladder 2",
      wordPairs: [
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
      ],
    },
    3: {
      id: "3",
      name: "sdasdasd",
      wordPairs: [
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
        { noun: "yell", verb: "pen" },
      ],
    },
  },
};
