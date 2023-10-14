//---------------------promise예시
//함수 자체가 return하는 값이 promise객체이다.
function promise1(flag) {
  //불린값으로 준 것 같다.?
  return new Promise(function (resolve, reject) {
    //인자 두개를 넘긴다. 결국 얘네도 콜백함수이다. 성공할때 실패했을때의 함수내용.
    if (flag) {
      resolve(`Promise상태 fulfilled!! then으로 연결된다. 이때 flag가 true`);
      //성공했을때 결과값으로 가져올값을 넣어주면된다.
    } else {
      reject(`Promise상태 rejected!! catch으로 연결된다. 이때 flag가 false`);
    }
  });
}
//---------------------promise 사용해보자
//특정함수가 return하는 값이 promise객체일 경우,
//함수 실행시키고 메소드체이닝으로 then이라는 함수와 catch라는 메소드를 사용할 수 있다.
//promise객체 안에 걔네가 할일을 담은 메소드를 가지고 있다. 그게 then, catch.

//then에는 콜백함수가 들어가게된다.
// promise1(true).then();

promise1(true)
  .then((result) => {
    //result에는 resolve로 보낸 인자값이 들어오게 된다.
    //여기서는 문자열.
    //   then의 매개변수로 콜백함수가 들어가낟.?
    //then없이 catch만 올 수도 있다. then이 있으면 catch가 뒤에오면된다..
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//catch가 되는걸 테스트해보고싶다면
promise1(false)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//---------------------------------------------------------
//promise 체이닝 사용해보기
//콜백지옥예시
// function add(n1, n2, cb) {
//   setTimeout(function () {
//     let result = n1 + n2;
//     cb(result);
//   }, 1000);
// }

// function mul(n, cb) {
//   setTimeout(function () {
//     let result = n * 2;
//     cb(result);
//   }, 700);
// }

// function sub(n, cb) {
//   setTimeout(function () {
//     let result = n - 1;
//     cb(result);
//   }, 500);
// }

// add(4, 3, function (x) {
//   console.log("1: ", x);
//   mul(x, function (y) {
//     console.log("2: ", y);
//     sub(y, function (z) {
//       console.log("3: ", z);
//     });
//   });
// });

//---------------------------------------------------------
//promise 로 해결해보자.
//어디에 promise객체를 넣어주면 될까.전체 다 return한다고 보면된다.
// function add(n1, n2) {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       let result = n1 + n2;
//       resolve(result);
//     }, 1000);
//   });
// }

// function mul(n) {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       let result = n * 2;
//       resolve(result);
//       //완료디ㅚ는 시점에 resolev 넣어주고 원래cb지우고 위에서 받는값도 지우고
//     }, 700);
//   });
// }

// function sub(n) {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       let result = n - 1;
//       resolve(result);
//     }, 500);
//   });
// }

// add(4, 3)
//   .then((result) => {
//     console.log("1: ", result); //then에서 return하는객체가 promise이면
//     return mul(result);
//   })
//   .then((result) => {
//     console.log("2: ", result);
//     return sub(result);
//   })
//   .then((result) => {
//     console.log("3: ", result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//then이 많으면 마지막에 catch한번만넣으면된다.//오류나면 다른거 안읽히고 캐치로 넘어가서 끝난다.
//읽기편해진다. 뭐가 끝나면 뭐가실행되고 ~~ 흐름보기에 좋아진다.

//------------------(promise)------async / await
//특정함수에다가 async 붙이면 자동으로 promise가 리턴된다.
//리턴하는게 프로미스면 저거 적어주면된다. 저게 있어야만 프로객스리턴하는건 아니다.
//

async function add(n1, n2) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
      //완료디ㅚ는 시점에 resolev 넣어주고 원래cb지우고 위에서 받는값도 지우고
    }, 700);
  });
}

function sub(n) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
    }, 500);
  });
}

add(4, 3)
  .then((result) => {
    console.log("1: ", result); //then에서 return하는객체가 promise이면
    return mul(result);
  })
  .then((result) => {
    console.log("2: ", result);
    return sub(result);
  })
  .then((result) => {
    console.log("3: ", result);
  })
  .catch((err) => {
    console.log(err);
  });

//1. async 함수는 promise를 return한다.
//2. await키워드는 async함수 내부에서만 사용가능하다.
//   async는 프로미스를 리턴한다. 이 함수에서만 await쓸수있따.
async function exec() {
  //어씽크안에서만 어웨잇쓸수잇어서 실행함수 만들어준거.
  const x = await add(4, 3); //얘가 실행되기를 기다리낟. then에 들어올값을 x에 넣어주는셈?. x=7이된다.
  console.log("1: ", x);
  const y = await mul(x); //await만나면 또기다린다. y=14가된다. 프로미스객체될때까지 기다린다.
  console.log("2: ", y);
  const z = await sub(y); //z=13이된다.
  console.log("3: ", z);
  //다 기다리고 실행되는
}

exec();

function test() {}

//--------------------
function test() {
  console.log("test");
}
console.log(test()); //이렇게 하면 얻니파인찍힌다. test함수는 반환값이 없다.반환값이 없기때문.
