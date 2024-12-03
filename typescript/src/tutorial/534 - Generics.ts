// let array1: string[] = ["apple", "banana", "mango"];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

// let array1: Array<string> = ["apple", "banana", "mango"];

// function createString(arg: string): string {
//   return arg;
// }
// function createNumber(arg: number): number {
//   return arg;
// }

// function genericFunction<T>(arg: T): T {
//   return arg;
// }

// const someStringValue = genericFunction<string>("hello world !");
// const someNumberValue = genericFunction<number>(100);

// interface GenericInterface<T> {
//   value: T;
//   getValue: () => T;
// }

// const gerericsString: GenericInterface<string> = {
//   value: "Hello world!",
//   getValue() {
//     return this.value;
//   },
// };

// async function someFunc():Promise<string> {
//   return "Hello world!";
// }

// const result = someFunc();

// function createArray<T>(length: number, value: T): T[] {

//   return Array(length).fill(value);
// }

// Example usage:
// const stringArray = createArray<string>(3, "hello");
// const numberArray = createArray<number>(4, 100);

// console.log(stringArray, numberArray);

// function generateStringArray(length: number, value: string): string[] {
//   let result: string[] = [];
//   result = Array(length).fill(value);
//   return result;
// }

// function createArray<T>(lenth: number, value: T): T[] {
//   let result: T[] = [];
//   result = Array(lenth).fill(value);
//   return result;
// }

// console.log(generateStringArray(6, "wow"));
// console.log(createArray(6, 89));

// function pair<T, U>(param1: T, param2: U): [T, U] {
//   return [param1, param2];
// }

// let result = pair<number, string>(123, "hello");
// console.log(result);

// // const [name,setName] = useState('')
// // const [product,setProduct] = useState<Product[]>([])

// // type constraint on the generic type T, generic type can be either a number or a string

// function processValue<T extends string | number>(value: T): T {
//   console.log(value);
//   return value;
// }

// processValue("hello");
// processValue(12);
// processValue(true);

// type Car = {
//   brand: string;
//   model: string;
// };

// const car: Car = {
//   brand: "ford",
//   model: "mustang",
// };

// type Product = {
//   name: string;
//   price: number;
// };

// const product: Product = {
//   name: "shoes",
//   price: 1.99,
// };

// type Student = {
//   name: string;
//   age: number;
// };

// const student: Student = {
//   name: "peter",
//   age: 20,
// };

// function printName<T extends {name:string} >(input: T): void {
//   console.log(input.name);
// }

// printName(student)
// printName(product)
// // printName(car)

// interface StoreData<T = any> {
//   data: T[];
// }

// const storeNumber: StoreData<number> = {
//   data: [1, 2, 3, 4, 5],
// };

// const randomStuff: StoreData = {
//   data: ["a", 1],
// };



// console.log(randomStuff);


const { data } = axios.get(someUrl);

axios.get<{ name: string }[]>(someUrl);

export class Axios {
  get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
}

export interface AxiosResponse<T = any, D = any> {
  data: T;
  status: number;
  statusText: string;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  config: InternalAxiosRequestConfig<D>;
  request?: any;
}