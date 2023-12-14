//-----------------------------js에서의 함수 작성
// function abc (){
//     console.log("abc")
// }

//-----------------------------TypeScript에서의 함수 작성

//ts에서는 매개변수의 type을 지정해줘야한다. 선언 할 때 지정!
//함수 자체의 return type: 함수가 실행됐을 때 return되는 값도 설정해준다.
//()뒤는 안적어도 된다. 근데 그냥 실했을 때 오류가 나면 작성해줘야한다.

//-----------------------------매개변수와 return 타입을 선언하는 기본 형식
//number형 a, b를 매개변수로 받아 합을 return한다.
function sum(a: number, b: number): number {
  return a + b;
  //return "hello" //error
}
console.log(sum(1, 1)); //2출력

//-----------------------------optional 매개변수 사용
//들어오지 않을 변수에 대해서는 ?를 사용해준다. undefined가 될 수도 있음을 정의해주는 것!
//아래 예시에서 b는 optional한 값이기 때문에 그냥 return을 하면 undefined이 뜬다. if문으로 조건을 줘야 한다.
// return a; 도 같이 작성해줘야 한다. 안그럼 undefined뜬다.
const sum1 = (a: number, b?: number): number => {
  if (b) return a + b;
  return a;
};

//-----------------------------함수의 리턴 타입이 없을 때는 void 사용
//---void함수
//void는 함수 자체의 타입으로 사용된다. return값이 없을 때 사용한다.

//존재할 수 있는 함수의 형태를 미리 선언해줘야 한다.
//{}부분이 구현하는 부분. 여기 빼고 선언한다.
function print(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}

interface Calculator {
  sum: (a: number, b: number) => number;
  sub?: () => void;
}

//optional한 값이기 때문에 sub를 불러오지 않아도 오류가 나지 않는다.
const calc: Calculator = {
  sum: sum,
};

//---never

function goingOn(): never {
  while (true) {
    console.log("go");
  }
}

//---오버로딩?
//함수의 이름은 같으나 형태가 다른 함수를 말한다. (매개변수의 개수가 다르거나, 반환값이 다르거나 등)
function hello(num: number, num2: number): number;
function hello(str: string, str2: string): string;

//선언만 해둔 함수를 아래에서 작성해서 구현햔다.
function hello(param: number | string, param2: number | string) {
  console.log(param);
  console.log(param2);
  return param;
}

hello(1, 2); //숫자가 들어가서 number형태로 return
hello("hello", "world"); //문자가 들어가서 string return

//---실습1
function sumPrac(a: number, b: number): number {
  return a + b;
}
console.log(sumPrac(5, 11));

//---실습2

// let arr: number[] = [];

// function sumAll(arr[]):number => {

// }
