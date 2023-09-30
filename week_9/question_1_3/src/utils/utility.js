import { v4 as uuidv4 } from 'uuid';
export const departments = ["Management","Sales","Accounting","Admin"];
export const employeesList = [
  {
    id: uuidv4(),
    name: "Michael Scott",
    department: "Management",
  },
  {
    id: uuidv4(),
    name: "Dwight Schrute",
    department: "Sales",
  },
  {
    id: uuidv4(),
    name: "Jim Halpert",
    department: "Sales",
  },
  {
    id: uuidv4(),
    name: "Pam Beesly",
    department: "Admin",
  },
  {
    id: uuidv4(),
    name: "Angela Martin",
    department: "Accounting",
  },
  {
    id: uuidv4(),
    name: "Kevin Malone",
    department: "Accounting",
  },
  {
    id: uuidv4(),
    name: "Andy Bernard",
    department: "Sales",
  },
  {
    id: uuidv4(),
    name: "Oscar Martinez",
    department: "Accounting",
  },
];

export const ACTIONS = {
  ADD: "add",
  DELETE: "delete",
  FILTER: "filter",
  DEFAULT: "default"
};
