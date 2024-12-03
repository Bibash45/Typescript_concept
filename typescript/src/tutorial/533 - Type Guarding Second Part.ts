import { person } from "./531 - ES6 Modules";
type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: "bibash", study: () => console.log("Studying") }
    : { name: "dipesh", login: () => console.log("Logging in") };
};

// const person = randomPerson();

const person: Person = {
  name: "anna",
  study: () => console.log("studying"),
};

function isStudent(person: Person): person is Student {
  // return 'study' in person
  return (person as Student).study !== undefined;
}

if (isStudent(person)) {
  person.study();
} else {
  //   person.login();
}

// Discriminated Unions and exhaustive check using never type

type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;
    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action: ;${unexpectedAction}`);
  }
}

const newState = reducer(5, {
  type: "decrement",
  user: "bibash",
  amount: 10,
  timestamp: 1643723900,
});

console.log();
