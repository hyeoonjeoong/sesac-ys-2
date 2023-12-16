//-----------------------------generic
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

//-----------------------------generic 사용 예시 1
//선언을 미리 못한다. 나중에 받아서 사용 할 때 T를 통해 사용한다. (관례)
//T에 원하는 자료형을 받아오는 것
function printXYByGeneric<T>(x: T, y: T) {
  console.log(x, y);
}
//호출하면서 매개변수로 들어갈 데이터 타입을 정해준다.
//타입을 함수의 파라미터처럼 사용할 수 있다.
printXYByGeneric<string>("a", "b"); //string으로 받는다.
printXYByGeneric<number>(1, 2); //number로 받는다.
// printXYByGeneric<string>(1,2) //error

//-----------------------------함수 > 화살표 함수로도 할 수 있다.
//---일반 함수
// function numArrLength (arr: number[]):number{
//     return arr.length
// }
// function strArrLength (arr: string[]):number{
//     return arr.length
// }
//---화살표 함수
const numArrLength = (arr: number[]): number => arr.length;
const strArrLength = (arr: string[]): number => arr.length;

//-----------------------------generic 사용 예시 2
//만약 객체 배열이나 이 외 다른 type의 배열도 length를 구하는 함수를 만들고 싶다면? (골고루 쓰고 싶을 때)
function arrLength<T>(arr: T[]): number {
  return arr.length;
}
arrLength<string>(["a", "b", "c"]);

//---두 개의 type을 정하고 싶다면?
function exampleGeneric<T, U>(x: T, y: U) {
  console.log(x, y);
}
exampleGeneric<string, number>("a", 1);

//-----------------------------generic 사용 예시 3 - interface에서의 generic 사용.
interface Phone<T> {
  company: string;
  model: string;
  option: T;
}
interface SamsungOption {
  a: string;
  b: number;
}
const samsung23: Phone<SamsungOption> = {
  company: "samsung",
  model: "samsung S23",
  option: {
    a: "aaa",
    b: 123,
  },
};
interface IphoneOption {
  a: string;
  c: number;
}
const iphone15: Phone<IphoneOption> = {
  company: "apple",
  model: "iphone15",
  option: {
    a: "aaa",
    c: 456,
  },
};

//-----------------------------generic 실습
//---실습1
//제네릭 이용해서 함수 arrElement 선언하기
//배열과 인덱스 번호를 매개변수로 받고, Arr[index]에 대한 요소를 리턴하는 함수 만들기
//함수의 리턴 타입까지 작성하기
function arrElement<T>(arr: T[], index: number): T {
  return arr[index];
}
console.log("실습1", arrElement<string>(["a"], 0));

//---실습2
// 첫번째 인자로 들어간 배열의 길이보다 큰 index 수(두번째 인자)가 전달된다면 return false 시키기!
function arrElement2<T>(arr: T[], index: number): T | boolean {
  if (arr.length <= index) {
    return false;
  }
  return arr[index];
}

console.log(arrElement2<string>(["a"], 1));
