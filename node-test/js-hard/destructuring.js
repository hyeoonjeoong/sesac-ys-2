const fruits = ["apple", "banana", "grape"];

//배열구조분해니까 []로 작성
//안에는 값을 할당하고 싶은 변수이름 작성
const [apple2, banana2, grape2, strawberry = "strawberry"] = fruits;
console.log(apple2, strawberry);

//strawberry 새로 추가한것
//이미 배열에 있는건 바뀌지 않는다.

//아래꺼랑 똑같다. 사실상 아래코드와 동일한 작업을 하고 있다.
// const apple2 ="fruits[0]"
// const banana2 ="fruits[1]"
// const grape2 ="fruits[2]"
//------------------------------------------------------------

let x = 1,
  y = 3;
[x, y] = [y, x];
console.log(x, y);

//얘는
//x=y 그럼 x=3ㅡ y=3이 된다.
//y=x 이렇게 하겠다는 말 . y=3이 된다고 한다.

//두 값을 치환하고 싶으면
// let temp = x;
// x=y //
// y=temp;
//배열구조분해를 이용하면 치환을 쉽게 할 수 있다. 위에 있다.

//------------------------------------------------------------
const obj = {
  name: "lily",
  gender: "여",
  age: 99,
};

// const { age, name, test = "test" } = obj;
// console.log(age, test);
//얘도 test 추가한거. 얘는 key로 가져오는거기때문에 순서 무관
//기존꺼에 없으니까 추가해주는거

//가져오고싶은거 가져오면 된다. 중괄호안에.
//얘는 키로 구분하기 때문에 순서상관없이 작성해도된다.
//위는 결국 아래행위와 동일
// const age=obj.age;
// const name=obj.name;

//key이름 바꾸고싶으면?
//앞에 존재하는key, 뒤에 바꾸고 싶은key
const { age, name: name2 } = obj;
console.log(age, name2);

//------------------------------------------------------------
//전개구문 연산자
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d", "e"];
//배열 합치고 싶을 때
//for() 이용해도된다. arr1돌려서 arr3으로 push, arr2돌려서 arr3으로 push
//더 조은 방법!
//spread 연산자.
const arr3 = [...arr1, ...arr2];
console.log("arr3", arr3);

//얘는 무슨 기능을 하냐
//배열과 만나게 되면 배열에 있는 모든 하나하나를
//...[1,2,3,4,5] 를 1,2,3,4,5 로 바꾼다.
//원소 하나하나를 빼준다. 배열로 감싼걸 풀어준다고 생각.

const hello = [..."hello"]; //"h", "e", "l", "l", "o" 이렇게 된다.
console.log("hello", hello);

//실습
const word1 = "abc";
const word2 = "xyz";
const word3 = [...word1, ...word2];

console.log(word3);

//-------------------------------
const obj2 = {
  name: "lily",
  gender: "여",
  age: 99,
};

//위에꺼를 다 가져오고 싶다면 ...obj2해주면된다. 값 추가하고 싶으면 아래처럼 작성
const obj3 = {
  ...obj2,
  test: "test",
};

console.log("obj3", obj3);
//--------------rest파라미터-------------------------------
//함수의 매개변수로 사용된다.
const values = [10, 20, 30];
function get(a, ...rest) {
  //얘는 rest. 남은걸 출력하겠다
  console.log(a); //10출력
  console.log(rest); //남은 인자들 전부 들어온다. rest의 배열로 묶여서.//20,30 출력
}
get(...values); //얘는 spread개념. 함수를 호출할 때
//...[10,20,30] => 10,20,30
//get(10,20,30) 이랑 똑같은셈
