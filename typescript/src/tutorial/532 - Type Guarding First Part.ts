// type ValueType = string | number | boolean;

// let value: ValueType;

// // const random = Math.random();

// // value = random < 0.33 ? "Hello" : random < 0.66 ? 12345.678 : true;

// function checkValue(value: ValueType): void {
//   if (typeof value === "string") {
//     console.log(value.toLowerCase());
//     return;
//   }
//   if (typeof value === "number") {
//     console.log(value.toFixed(2));
//     return;
//   }
//   console.log(`boolean : ${value}`);
// }

// checkValue(value);

// Equality narrowing

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };

type Animal = Dog | Cat;

function makeSound(animal: Animal) {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
}

const jerman: Dog = {
  type: "dog",
  name: "Jerman",
  bark: () => console.log("Woof"),
};

// makeSound(jerman);

function makeSound2(animal: Animal) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound2(jerman);

// "Truthy"/"Falsy" guard
// "Truthy" values are values that are considered true in a boolean context.
// "Falsy" values are values that are considered false in a boolean context.
// "Truthy" values include: numbers (except 0), strings (except ""), objects, arrays
// "Falsy" values include: 0, "", null, undefined, NaN

function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log("no string provided");
  }
}

printLength("he");
printLength(null);
printLength(undefined);
// printLength();

// try {
//     throw 'some error'
// //   throw new Error("This is an error");
// } catch (err) {
//   if (err instanceof Error) {
//     console.log(`Caught an Error object : ${err.message}`);
//   } else {
//     console.log('unknown error....');
//   }
// }

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const random = checkInput("2020-05-05");

console.log(year);
console.log(random);


