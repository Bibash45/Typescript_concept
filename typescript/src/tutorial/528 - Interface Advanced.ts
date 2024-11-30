// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwners {
//   dogName: string;
//   getDogDetails(): string;
// }

// interface Person {
//   age: number;
// }

// const person: Person = {
//   name: "Bibash",
//   age: 20,
//   getDetails(): string {
//     return `Name: ${this.name}, Age : ${this.age}`;
//   },
// };

// interface Employee extends Person {
//   employeeId: number;
// }
// const employee: Employee = {
//   employeeId: 123,
//   name: "jane",
//   age: 28,
//   getDetails() {
//     return `Name: ${this.name}, Age : ${this.age}, EmployeeId : ${this.employeeId}`;
//   },
// };

// console.log(employee.getDetails());

// interface Manager extends Person, DogOwners {
//   managePeople(): void;
// }

// const manager: Manager = {
//   name: "bob",
//   age: 30,
//   dogName: "rex",
//   getDogDetails() {
//     return `Dog Name: ${this.dogName}`;
//   },
//   getDetails() {
//     return `Name: ${this.name}, Age : ${this.age}`;
//   },
//   managePeople() {
//     console.log("Manager is managing people....");
//   },
// };

// manager.managePeople();

// challenges

function getEmployee(): Person | DogOwners | Manager {
  const random = Math.random();
  if (random < 0.33) {
    return {
      name: "John",
    };
  } else if (random < 0.66) {
    return {
      name: "John",
      dogName: "rex",
    };
  } else {
    return {
      name: "bob",
      managePeople() {
        console.log("Manager is managing people....");
      },
      delegateTasks() {
        console.log("Manager is delegating tasks....");
      },
    };
  }
}

interface Person {
  name: string;
}

interface DogOwners extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

const employee: Person | DogOwners | Manager = getEmployee();

// console.log(employee);

function isManager(obj: Person | DogOwners | Manager): obj is Manager {
  return "managePeople" in obj;
}

if(isManager(employee)){
employee.delegateTasks()
}