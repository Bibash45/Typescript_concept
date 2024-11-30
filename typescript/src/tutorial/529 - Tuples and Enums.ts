// Tuples

let person: [string, number] = ["john", 25];

let date: [number, number, number] = [12, 17, 2001];
date.push(34);

function getPerson(): [string, number] {
  return person;
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

let bibash: [string, number?] = ["bibash"];

// Enums
enum ServerResponseStatus {
  Success = "success",
  Error = "error",
}
Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === "number") {
    console.log(value);
  }
});

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["data1", "data2"],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);

enum UserRole {
  Admin=1,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}

const user: User = createUser({
  id: 1,
  name: "Bibash Thary",
  role: UserRole.Admin,
  contact: ["1234567890", "bibash@gmail.com"],
});

console.log(user);
