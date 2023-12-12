//-----------------------------Array
//js) let str = "hello"
//변수명:타입지정 = 할당
let str: string = "hello";

// str = 5; //error
console.log(str);

let num: number;
num = 5;

// let undif: undefined = 5; //error. undefined니까 당연히 할당 불가

let nu: null = null; //이런식은 가능

//숫자로 이루어진 배열의 type : number[]
let arr: number[] = [1, 2, 3, 4, 5];

//문자로 이루어진 배열의 type : string[]
let strArr: string[] = ["a", "b", "c"];
let strArr2: Array<string> = ["a", "b", "c"]; //이러케도 가능

//숫자와 문자로 이루어진 배열?
let numStrArr: (number | string)[] = [1, "a"];
let numStrArr2: Array<number | string> = [1, "a"];
let abc: number | string = "a"; //둘 중 하나의 자료형이 들어올 수 있다.
abc = 5;

//any는 어떤 자료형이나 아무거나 가능. 하지만 사용하는거 지양 해야 함. 받아야 하는 데이터의 타입을 추측할 수 없거나, 외부 라이브러리
let anyArr: any[] = [1, "a", null, undefined, {}];

//object 자료형. 객체 자체를 의미한다.
let obj: object = {
  name: "lily",
};

//-----------------------------Tuple
//Tuple : 배열의 각각의 타입에 모두 type을 지정해줘야한다.
//아래는 길이가 2인 튜플을 만드는 것. 길이를 맞춰줘야한다.
let drink: [string, number] = ["cola", 2500];
console.log("원래꺼", drink[0]);
drink[0] = "cidar";
console.log("사이다로 변경", drink[0]);
//drink[2] = "aaaa"
//튜플의 한계. 위처럼 할당하는 건 오류로 잡지만 아래 push메소드를 이용하면 오류를 잡지 않음. 단 나중에 접근은 안될 것
drink.push("aaa");
console.log("푸쉬하고 나서", drink);

//읽기만 가능
let drink2: readonly [string, number] = ["cola", 2500];
// drink2[0] = "aaa" //error. readonly라 못바꾼다.

//-----------------------------Enum
//숫자와 문자만 데이터로 넣을 수 있다. 열거형 데이터 배열
//sun, rain, cloud 날씨에 대한 내용으로 예시
// enum Weather {
//   sun = 0,
//   rain = 1,
//   cloud = 2,
// }

//아래처럼 해도 된다. 열거형이기 때문에 알아서 0,1,2로 구분
enum Weather {
  sun,
  rain,
  cloud,
}
enum Weather2 {
  sun = "sun",
  rain = "rain",
  cloud = "cloud",
}

console.log(Weather.sun);
console.log(Weather2.sun);

const weather = 0;

if (weather == Weather.sun) {
  console.log("맑은 날씨!");
}

// let aaaa: Weather = 3; //얘는 없는거니까 오류
let aaaa: Weather = 2;

//-----------------------------실습

let olimpic_newgame: readonly [object, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];
// olimpic_newgame[1]=false
console.log(olimpic_newgame);
