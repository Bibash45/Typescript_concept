function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });

console.log(first, second);

// alternative

function createStudent(student: { id: number; name: string }): void {
  console.log(student);
  console.log(`welcome to the course ${student.name.toUpperCase()}`);
}

const newStudent = {
  id: 5,
  name: "anna",
};

createStudent(newStudent);

createStudent({ id: 8, name: "dipesh" });

// createStudent({ id: 8, name: "depak", email?:'dipesh@gmail.com' });

// challenges
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
) {
  if (typeof input === "number") {
    return input * input;
  } else if (typeof input === "string") {
    if (config.reverse) {
      return input.toUpperCase().split("").reverse().join("");
    } else {
      return input.toUpperCase();
    }
  }
}

console.log(processData("wow"));
console.log(processData("hello", { reverse: true }));
