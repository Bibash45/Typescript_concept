function sayHi(name: string) {
  console.log(`hello there, ${name}`);
}
//- any
//- config
// type

sayHi("bibash");
// sayHi(3)

function calculateDiscount(price: number): number {
  const hasDiscount = true;
  if (hasDiscount) {
    return price * 0.1;
    // return "Discount applied";
  }
  return price * 0.9;
}
const finalPrice: number | "Discount applied" = calculateDiscount(200);
console.log(finalPrice);

function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}

const result = addThree(3);
const someValue = result;
// run time error -> someValue.myMethod();

const names: string[] = ["bibash", "dipen", "dipesh", "op"];

function checkBName(name: string): boolean {
  return names.includes(name);
}
const name = 'bibash'
if (checkBName(name)) {
  console.log(`bibash is in the list`);
} else {
  console.log("name is not in the list");
}
