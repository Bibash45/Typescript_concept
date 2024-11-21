let tax: number | string = 10;
tax = 100;
tax = "bibash";

let requestStatus: "pending" | "success" | "error" = "pending";

requestStatus = "pending";
requestStatus = "error";
requestStatus = "success";

// requestStatus = 'random'

// any
let notSure: any = 4;
notSure = "may be string instead";
notSure = true;

const books = ["1857", "Hello world", "Bibash 56"];
let foundBook:string | undefined;


for (let book of books) {
  if (book === "Hello world") {
    foundBook = book;
    break;
  }
}

console.log(foundBook);

