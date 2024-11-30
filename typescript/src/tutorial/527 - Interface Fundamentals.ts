interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (somevalue: number) => number;
}

const deepWork: Book = {
  isbn: 123,
  title: "deep work",
  author: "cal newport",
  genre: "self-help",
  //   printAuthor() {
  //     console.log(`The author is ${this.author} .`);
  //   },
  printTitle(message) {
    return `${message} ${this.title}`;
  },

  // first option
  printSomething: function (somevalue) {
    return somevalue;
  },

  // second option
  //   printSomething: (somevalue) => {
  //     // console.log(this.author); <-- error
  //     console.log(deepWork.author);

  //     return somevalue;
  //   },

  // third option
  //   printSomething(somevalue) {
  //     return somevalue;
  //   },

  printAuthor: () => {
    console.log(deepWork.author);
  },
};
// deepWork.isbn = 'some value'

deepWork.printAuthor();
// const result = deepWork.printTitle(`hello`);
// console.log(result);

// console.log(deepWork.printSomething(34));

interface Computer {
  readonly id: number;
  brand: string;
  name: string;
  ram: number;
  storage?: number;
  upgradeRam(amount: number): number;
}

const Laptop: Computer = {
  id: 1,
  brand: "ram",
  name: "ram",
  ram: 8,
  upgradeRam(amount: number): number {
    return (this.ram += amount);
  },
};

Laptop.storage = 256;
const result = Laptop.upgradeRam(1);
console.log(result);

console.log(Laptop);
