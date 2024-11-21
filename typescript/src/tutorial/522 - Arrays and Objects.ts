let prices: number[] = [100, 35, 689];
prices.push(4);
// prices.push("hello")
console.log(prices);

let fruit: string[] = ["apple", "banana", "cherry", "grape"];
fruit.push("guava");
// fruit.push(5)
console.log(fruit);

// let ranvalues: [] = ["hello"];
let emptyValures: number[] = [];

let names = ["biabsh", "dipesh", 1, 4];
let array: (string | boolean)[] = ["apple", true, "banana"];
// array.push(56);

let temperature: number[] = [20, 25, 30];
// temperature.push('hotter');

let colors: string[] = ["red", "greeen", "blure"];
// colors.push(true)

let mixedArray: (number | string)[] = [1, "two,3"];

// ----------->  object

let car: { brand: string; year: number } = { brand: "toyoto", year: 2024 };

car.brand = "form";
// car.color = "blue";

let car1: { brand: string; year: number } = { brand: "audi", year: 2024 };

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title = "new book";

let bike: { brand: string; year: number } = { brand: "yamaha", year: 2020 };
// bike.year='old'

let laptop: { brand: string; year: number } = { brand: "HP", year: 2030 };
// let laptop1:{brand:string; year:number} ={brand:'HP1'}

let product1 = { title: "shirt", price: 30 };
let product2 = { title: "pants" };
let products: { title: string; price?: number }[] = [product1, product2];

products.push({title:"shoes"})
products.push({title:"shoes", price:45})
// products.push({title:"shoes", price:"twenty five"})

