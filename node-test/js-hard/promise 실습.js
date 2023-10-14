//------------------callback을 promise로

// function call(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(name);
//       console.log(name);
//     }, 1000);
//   });
// }
// function back() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("back");
//       console.log("back");
//     }, 1000);
//   });
// }
// function hell() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {});
//     resolve("hell");
//   }, 1000);
// }

// call("kim")
//   .then((result) => {
//     console.log(result, "반가워");
//     return back(result);
//   })
//   .then((result) => {
//     console.log(result + "을 실행했구나");
//     return hell(result);
//   })
//   .then((result) => {
//     console.log("여기는 callback" + result);
//   })

//   .catch((err) => {
//     console.log(err);
//   });

//------------------promise를 async/await로
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(name);
      console.log(name);
    }, 1000);
  });
}
function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("back");
      console.log("back");
    }, 1000);
  });
}
function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {});
    resolve("hell");
  }, 1000);
}

async function exec() {
  const x = await call("kim");
  console.log(x, "반가워");
  const y = await back();
  console.log(y, "을 실행했구나");
  const z = await hell("kim");
  console.log("여기는 callback", z);
}
exec();

//------------------콜백지옥을 promise로 변경하기

setTimeout(function () {
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    document.body.style.backgroundColor = "orange";
    setTimeout(function () {
      document.body.style.backgroundColor = "yellow";
      setTimeout(function () {
        document.body.style.backgroundColor = "green";
        setTimeout(function () {
          document.body.style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//어케바꿀까
function colorChange(whatColor) {
  setTimeout(function (resolve) {
    document.body.style.backgroundColor = "whatColor";
  }, 1000);
}

colorChange(true)
  .then((resolve) => {
    colorChange("red");
  })
  .then((resolve) => {
    colorChange("orange");
  });
  .then((resolve) => {
    colorChange("yellow");
  });
  .then((resolve) => {
    colorChange("green");
  });
  .then((resolve) => {
    colorChange("blue");
  });