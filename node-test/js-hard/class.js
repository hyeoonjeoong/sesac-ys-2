//객체 만들고 있었다. 어케했었냐면
//객체 안에 있는 함수는 메소드
const cat = {
  name: "나비",
  age: 2,
  mew: function () {
    console.log("야옹");
  },
};
//고양이를 여러마리 키운다면 이러케 주르륵만들겠다.
//근데 보면 중복적인 부분이 있다. name,age같은거.
//이런거 일일이 다 선언하려면 귀찮아진다. 많은 줄을 써야한다.
//이렇게 반복되는 코드를 하나의 틀로 만들겠다는것.
//이 틀을 만드는게 class라는 문법이다.
const cat2 = {
  name: "장화",
  age: 80,
  mew: function () {
    console.log("야옹");
  },
};
const cat3 = {
  name: "코코",
  age: 4,
  mew: function () {
    console.log("야옹");
  },
};

//class 어케 만드냐면
//pascalcase 규칙을 이용해서 식별자를 생성하게 된다. 이걸이용해서 class생성
//camelcase에서 첫글자를 대문자로 바꾸면 된다. (첫글자도 대문자인 방식)
//Date() 얘도 클래스. 앞에 대문자였다!
class Cat {
  //여기에 틀을 지정해주면 된다.
  //constructor는 생성자를 의미한다. 생성자도 메소의 일종이다.
  //(메소드중에서)cat클래스를 이용해서 객체를 만드는 순간에 호출되는 메소드를 생성자라고 한다.생성자에서 속성을 지정한다.
  constructor(name, age) {
    //이렇게 값을 맞추겠다는거. 여기서 얘와 아래 45번의 괄호를 맞춰야 하는것. 인자 두개 넘겨줘야하는것!
    this.name = name; //둘은 다르다.각 다른공간에 있는 얘들이다. 오른쪽에 있는 name은
    this.age = age; //클래스를 통해 객체를 만들면 그 객체가 this에 담긴다.
  }
  //class내에서 메소드만들때는 function 안붙여도된다. 클래스내부에서 함수 만들면된다?
  //그럼 얘는 메소드이다.
  mew() {
    console.log("야옹");
  }
  //고양이의 정보를 콘솔로 찍는 메소드 만들어보자
  info() {
    console.log(`이름은 : ${this.name}, 나이는 : ${this.age}살`);
  }
}

//cat클래스를 이용해서 새로운 객체를 만들겠다. 앞에 new해준다. 그리고 34에서 만든 클래스명. 그리고 괄호안에 값
const cat4 = new Cat("나비", 2); //이런식으로 넘겨지게 되는 것. 생성자는 호출할 때 바로 불러오는얘다..?
//클래스 이렇게 사용된다.
//여기 괄호가 붙을때 바로 호출되는게 constructor메소드이다. 그래서 오타내면안된다.
const cat5 = new Cat("장화", 50);
//class로 만들었다하면 그 틀에 가서 보면된다. 어케 만든건지.
//하고나서 함수호출할거면 아래처럼
console.log(cat4.name, cat5.name);
cat4.mew();
cat4.info();

//-------------연습왜아노디지.
class House {
  //생성자 함수, 객체의 속성(내부에서 사용할 변수)부여
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  //객체 메소드
  age() {
    console.log(`${new Date().getFullYear() - this.year}년에 건축 되었어요`);
  }
}

const houseSeoul = new House("서울집", 2022);
houseSeoul.age(); //변수명이랑 함수 사이에. 해야한다 ..
