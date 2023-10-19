//---------------------원하는대로 실행안되는
function goMart() {
  console.log("마트에 가서 어떤 음료를 살 지 고민한다.");
}

function pickDrink() {
  setTimeout(function () {
    console.log("고민 끝!");
    product = "제로콜라";
    price = 2000;
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

let product;
let price;
goMart();
pickDrink();
pay();

//비동기처리
//---------------------콜백함수로 해결한거.

function goMart() {
  console.log("마트에 가서 어떤 음료를 살 지 고민한다.");
}

let product;
let price;

function pickDrink(callback) {
  setTimeout(function () {
    console.log("고민 끝!");
    product = "제로콜라";
    price = 2000;
    callback(product, price);
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

goMart();
pickDrink(pay);

//---------------------promise로 해결해보기
//어디서 사용할지 판단해야한다. 제일오래걸리는곳에 가서 넣어준다.

function goMart() {
  console.log("마트에 가서 어떤 음료를 살 지 고민한다.");
}

let product;
let price;

function pickDrink() {
  //이 pickDrink 함수 자체가 promise객체를 return하게 하자.
  //이거는 이게 끝나면 then이라는 함수가 실행된다는것.
  return new Promise(function (resolve, reject) {
    //원래 우선적으로 하려던 작업을 여기 넣어준다.
    setTimeout(function () {
      console.log("고민 끝!");
      product = "제로콜라";
      price = 2000;
      //여기 값이 할당된거니까 여기에 resolve를 넣어주면된다. 이 값을 받고 나서 해야하는거니까.
      //product, price가 끝나는 시점에 이거롤 성공시키겠다!
      //resolve하고 아무것도 안넣으면 성공적으로 걍 끝났다고 알려주는거.
      resolve(); //이순간에 아래 then으로 넘어간다. 그리고 실행되는것.
      //실패하는게 없으면 reject안넣어도된다.
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

goMart();
pickDrink().then(() => {
  pay(product, price);
});
//얘가 잘 실행될때까지 기다리고 싶으면 then을 입력해준ㄷ나.
//pickDrink 함수 자체가 promise객체를 return하게 한 그게 성공적으로 끝나면 넘어가도록 하는거.
//고마트하고 프리드린크하고 성공하면 then으로 넘어가고 그리고pay를 실행한다.
//이렇게하면 코드 해석하기도 쉬워진다.

// pay(product, price);

//---------------------------------------------------------
//-----------------async/await으로 해결해보기
function goMart() {
  console.log("마트에 가서 어떤 음료를 살 지 고민한다.");
}

let product;
let price;

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!");
      product = "제로콜라";
      price = 2000;
      resolve();
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

//얘 건드려주면된다 아래처럼. 얜 필요업슴
goMart();
pickDrink().then(() => {
  pay(product, price);
});

//이러케
//await 은 resolve만날때까지 기다린다.
async function exec() {
  goMart();
  await pickDrink();
  pay(product, price);
}
exec();
