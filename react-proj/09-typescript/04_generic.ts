//---generic
//기본적으로는 선언할 때 type을 지정해준다.
//근데 사용하다보면 다양한 type에 대해서 처리를 해줘야 할 필요가 생길 수 있다.
//generic은 호출하거나 사용할 때 type을 넘겨서 해당 타입으로 지정할 수 있도록 해준다.
function printXY(x: number, y: number) {
  console.log(x, y);
}
printXY(1, 2);
//근데 이 함수가 string일 때도 필요하다면  하나씩 또 만들어야 한다. 비효율적이다.
function srtPrintXY(x: string, y: string) {
  console.log(x, y);
}
srtPrintXY("a", "b");

//---예시 1
//선언을 미리 못한다. 나중에 받아서 사용 할 때 T를 통해 사용한다. (관례)
//T에 원하는 자료형을 받아오는 것
function printXYByGeneric<T>(x: T, y: T) {
  console.log(x, y);
}
//호출하면서 타입을 정해준다.
printXYByGeneric<string>("a", "b"); //string으로 받는다.
// printXYByGeneric<string>(1,2) //error
printXYByGeneric<number>(1, 2); //number로 받는다.

//---예시 2
// function numArrLength (arr: number[]):number{
//     return arr.length
// }

// function strArrLength (arr: string[]):number{
//     return arr.length
// }
//얘도 화살표함수로 할 수 있다.
const numArrLength = (arr: number[]): number => arr.length;
const strArrLength = (arr: string[]): number => arr.length;

//만약 객체 배열이나 이 외 다른 type의 배열도 length를 구하는 함수를 만들고 싶다면?
function arrLength<T>(arr: T[]): number {
  return arr.length;
}
arrLength<string>(["a", "b", "c"]);

//두 개의 type을 정하고 싶다면?
function exampleGeneric<T, U>(x: T, y: U) {
  console.log(x, y);
}
exampleGeneric<string, number>("a", 1);

//---interface에서도 generic 가능하다.
interface Phone<T> {
  company: string;
  model: string;
  option: T;
}
interface SamsungOptoin {
  a: string;
  b: number;
}
const samsung23: Phone<SamsungOptoin> = {
  company: "samsung",
  model: "samsung S23",
  option: {
    a: "aaa",
    b: 123,
  },
};
interface IphoneOptoin {
  a: string;
  c: number;
}
const iphone15: Phone<IphoneOptoin> = {
  company: "apple",
  model: "iphone15",
  option: {
    a: "aaa",
    c: 456,
  },
};

//---실습
function arrElement<T>(arr: T[], i: number) {
  if (i > arr.length) return false;
}
console.log(arrElement<string>(["a"], 1));
// console.log(arrElement<string>(["a"], 0));
