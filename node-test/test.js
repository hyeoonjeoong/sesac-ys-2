function run() {
  console.log("3초 뒤 실행");
}

console.log("시작");

//콜백함수 : 함수의 인자로 함수를 넘길 때, 인자로 넘기는 그 함수가 callback 함수이다.
setTimeout(run, 3000); //run() 이렇게 실행시키는걸로 작성하는게 아니다. 함수만 넘겨주면 된다.
console.log("끝");
