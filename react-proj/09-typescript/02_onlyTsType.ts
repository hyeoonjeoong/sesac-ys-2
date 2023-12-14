//-----------------------------사용자 정의 type만들기

import { StringLiteral } from "typescript";

//gender라는 타입을 만들겠다.
type gender = "Men" | "Women";
//lilt라는 변수에 gender 타입을 지정
const lily: gender = "Women";
// const lily: gender = "abcd"

//-----------------------------tuple에서의 type 지정
//[상품명, 가격]
type productInfo = [string, number];
const cola: productInfo = ["cola", 2500];

//-----------------------------객체에서의 type 지정 : interface 사용
//객체 만들 때는 보통 interface키워드 주로 사용 (변수명은 대문자로 시작하는게 관례)
interface ProductInfo2 {
  productName: string;
  price: number;
}
//cidar라는 변수명에 ProductInfo2 type을 지정
const cidar: ProductInfo2 = { productName: "cidar", price: 2500 };

//-----------------------------사용자 정의 type에 지정되지 않은 내용을 넣고 싶다면?
// const cidar : ProductInfo2 = {productName: "cidar", price:2500, sale : 10} //오류 발생

//-----------------------------객체에서의 type 지정 : type 사용
//-----------------------------optional한 값 사용하기
//---있어도 되고 없어도 되는 key값을 넣으려면? 물음표 붙이면 된다.
type ProductInfo3 = {
  productName: string;
  price: number; //있으면 자료형이 number, 없으면 undefined
  sale?: number;
};
//아래에 sale 안넣어도 오류가 안난다.
const beer: ProductInfo3 = { productName: "cidar", price: 2500 };
console.log(beer.sale); //undefined
const beer2: ProductInfo3 = { productName: "cidar", price: 2500, sale: 10 };

//-----------------------------객체에서의 type 지정 : interface 사용 예시
interface Seller {
  name: string;
}

interface ProductInfo4 {
  productName: string;
  price: number;
  sale?: object;
  seller?: Seller;
}
const soju: ProductInfo4 = {
  productName: "soju",
  price: 2000,
  seller: { name: "lily" },
};

console.log("soju?", soju); //{ productName: 'soju', price: 2000, seller: { name: 'lily' } } 출력.
console.log("soju.productName", soju.productName); //soju 출력.

//-----------------------------옵셔널 체이닝
//   console.log(soju.seller.name)
//->seller는 필수값이 아니다. 필수로 존재한다는 보장이 없다. undefined가 될 수 있다.
//콘솔로 확인하고 싶다면? 이렇게 물음표를 함께 넣어줘야한다.
console.log("soju.seller?.name", soju.seller?.name); //lily 출력.

//-----------------------------interface는 상속도 가능하다.
//---함수 메소드를 사용하려면?
interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  studentID: string;
  //함수 정의. 매개변수 없고 return값도 없다.
  eat: () => void;
}

const Person: Person = { name: "lily", age: 88 };
const stu: Student = {
  name: "lily",
  age: 88,
  studentID: "00000000",
  eat: () => console.log("밥을 먹는다."),
};

//-----------실습
type Category = "액션" | "롤플레잉";
type Platform = "모바일";

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: Category;
  platform: Platform;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};
