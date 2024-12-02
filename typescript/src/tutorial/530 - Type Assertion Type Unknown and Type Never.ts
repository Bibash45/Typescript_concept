let someValu: any = "this is a string";

let strLength: number = (someValu as string).length;

type Bird = {
  name: string;
};
let birdString = '{"name":"Eagle"}';
let dogString = '{"breed":"Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

console.log(birdObject);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type User = {
  name: string;
  status: Status;
};

// save Status.Pending in the DB as a string
// retrieve string from the DB

const statusValue = "pending";

const user: User = {
  name: "bibash",
  status: statusValue as Status,
};

console.log(user);

// assign different types of values of unknown values

let unknownValue: unknown;
unknownValue = "hello";
unknownValue = [1, 2, 4];
unknownValue = { name: "bibash" };
unknownValue = 42.535;

// unknownValue.toFixed(2); <- error

if (typeof unknownValue === "number") {
  unknownValue.toFixed(2);
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0) {
    throw new Error("there was an error");
  } else {
    throw "some error";
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}

// let someValue: never = 'dokjasjdo'

type Theme = "light" | "dark";
function checkTheme(theme: Theme): void {
  if (theme === "light") {
    console.log("light theme");
  } else if (theme === "dark") {
    console.log("dark theme");
  } else {
    console.log("invalid theme");
  }
}

checkTheme("light");

enum Color {
  Red,
  Blue,
  Green,
}

function getColorName(colors: Color) {
  switch (colors) {
    case Color.Red:
      return "Red is good";

    case Color.Blue:
      return "blue is good";
    case Color.Green:
      return "Green is good";

    default:
      // at build time
      let unexpectedColor: never = colors;
      // at run time
      throw new Error("invalid color value :" + colors);
  }
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green));

