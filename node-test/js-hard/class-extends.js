//--------상속

class House {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    console.log(
      `이 건물은 ${new Date().getFullYear() - this.year}년 됐습니다.`
    );
  }
}

const home = new House("새싹", 2022);
home.age();

//여기서 건물년도나 이런거 상속받는 아파트 만들어보자
//아파트도 건물이름, 건축년도는 다 존재한다. 집이라는 기본적인 속성과 메소드를 가지고 있되
//아파트는 추가로 층수라는 개념을 추가하고 싶은 것. 그럼 기본틀은 가져오면서 추가하면 된다.
//여기서 상속 개념을 사용한다.
//extends뒤에 상속받고싶은 클래스명 가져온다.

//주의할점은
//아파트는 집이 가지고있는 속성을 기본적으로 가지고있다. 그래서 그 속성을 미리 설정해줘야한다.
//근데 그 기존속성을 가지고있는 주인은 House. 그래서 그것도 가져와야ㅏ한다.super 키워드 사용.
class Apartment extends House {
  constructor(name, year, floor) {
    //여기서도 다 가져와야함
    // 부모(House) 의 생성자 호출
    super(name, year); //부모의 생성자를 호출한다. 원래주인 델꼬오는거 여기서는 House
    this.floor = floor; //아파트에서 고유로 가지고있는거. 윗줄은 상속으로 델꼬온거
  }

  //오버라이딩 : 부모에 있는 메소드를 자식이 다시 정의하는 것
  //다시 정의되는게 오버라이딩.
  age() {
    super.age();
    console.log(`입주는 ${this.year + 1}년부터 시작했습니다.`);
  }
}
//상속했으니까 얘네가 뒤쪽에 와야하네
const apart = new Apartment("래미안 아파트", 2013, 25);
console.log(apart.name, apart.floor);
apart.age();

//오버로딩
function test(a, b) {
  console.log(`a: ${a}, b:${b}`);
}
function test(a, b, c) {
  console.log(`a: ${a}, b:${b}, c:${c}`);
}

//오버로딩 위와 같은 예시일떄.
//똑같은 이름으로 여러개의 함수를 선언하는 것.
//기본적으로 함수 호출할때 함수의 매개변수를 찾게된다. 그 개수에 따라 어떤 함수인지 식별할 수 있게 된다.(다른언어에서는)
//근데 js는 안됨/ js는 마지막껄로 덮어씀. 오버라이딩 오버로딩이랑은 다른거.

//------------------------실습 shape클래스 만들기

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    console.log(this.width * this.height);
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

//------------------------실습 선택 클래스상속
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}

let rec2 = new Rectangle(2, 2);
console.log("직사각형", rec2.getArea());
//
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}
let tri = new Triangle(3, 4);
console.log("삼각형", tri.getArea());
//
class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    return this.radius ** 2 * 3.14;
  }
}
let cir = new Circle(3, 3, 3);
console.log("동그라미", cir.getArea());
