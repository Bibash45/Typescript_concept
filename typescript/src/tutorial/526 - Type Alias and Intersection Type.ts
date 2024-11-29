type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: "John",
  isActive: true,
};
const bibash: User = {
  id: 1,
  name: "bibash",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!`);
  return user;
}

console.log(createUser(john));

type StringOrNumber = string | number;

let value: StringOrNumber;
value = 10;
value = "hello";

type Theme = "light" | "dark";
let theme: Theme;
theme = "light";
theme = "dark";

function setTheme(t: Theme) {
  theme = t;
  return theme;
}

console.log(setTheme("light"));
console.log(setTheme("dark"));

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(staff.name + " is a manager");
  } else {
    console.log(
      `${staff.name} is an employess in the ${staff.department} department`
    );
  }
}

const shakti: Employee = { id: 1, name: "shakti", department: "sales" };
const bob: Employee = { id: 2, name: "bob", department: "HR" };
const dipesh: Manager = { id: 3, name: "dipesh", employees: [shakti, bob] };

printStaffDetails(shakti);
printStaffDetails(bob);
printStaffDetails(dipesh);

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1 = {
  id: 1,
  name: "the ghost",
  price: 10.99,
};
const book2 = {
  id: 1,
  name: "how to cook pizza",
  price: 16,
};
const discountedBook: DiscountedBook = {
  id: 1,
  name: "how to cook pizza",
  price: 25,
  discount: 0.15,
};

const propName = "age";
type Animal = {
  [propName]: number;
};

let tiger = { [propName]: 6 };
