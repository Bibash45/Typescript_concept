function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  let total = numbers.reduce((previous, current) => {
    return previous + current;
  });
  return `${message}${total}`;
}

let result = sum("The total is :", 1, 2, 3, 4, 5);

function logMessgae(message: string): void {
  console.log(message);
  //   return 'hello world'
}
logMessgae(`hello, typescript`);

function processInput(a: number | string) {
  if (typeof a === "number") {
    console.log(`${a * 2}`);
  } else if (typeof a === "string") {
    console.log(`${a.toUpperCase()}`);
  } else {
    console.log("Invalid input");
  }
}
processInput(5);
processInput("Bibash");
