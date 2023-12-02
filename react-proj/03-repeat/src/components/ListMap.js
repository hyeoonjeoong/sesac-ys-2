import React from "react";
import { useState } from "react";

function ListMap() {
  const productList = [
    { id: 1, product: "가방" },
    { id: 2, product: "패딩" },
    { id: 3, product: "신발" },
    { id: 4, product: "상의" },
    { id: 5, product: "하의" },
  ];
  const [list, setList] = useState(productList);
  const [newProduct, setNewProduct] = useState("");

  //map은 앞에 있는 배열에 대해서 반복을 하면서, map의 인자로 넘어가는 콜백함수의 return값을 이용해 새로운 배열을 생성.

  const addProduct = (e) => {
    //list와 추가할 객체를 합쳐줘야함
    //원래라면 새로운 상품을 back에서 insert하고 생긴 primary값을 id에 담아주면 좋다. 지금은 임시로 length사용
    const newObj = { id: list.length + 1, product: newProduct };

    //기존 [list]에 스프레드 연산자통해서 가져온다. 모든거 다 풀어서 가져오는거. (...list)
    // const newList = [...list, newObj];

    //이렇게 해도 된다!
    const newList = list.concat(newObj);

    //push하면 안되나?
    //state변수 변경할때는 setter사용해야한다. 그래서 newObj만들고 한 것.

    //setList
    setList(newList);
    setNewProduct("");
  };

  const deleteProduct = (id) => {
    //더블클릭한 상품에 대해서 삭제를 해야한다.  이 때 filter 이용!
    //filter 메소드 (return되는 값은 조건. 이 조건을 만족하면 true가 되니 그 배열이 반환된다.)
    //앞에 있는 배열에 대해 반복을 한다.
    //filter메소드의 return 값은 조건이 되더야 한다. 조건이 true일 경우 해당 원소는 배열에 포함된다.
    //조건이 false일 경우 배열에 포함하지 않는다.
    //클릭한게 아닌 값들이 남겨져야 하니 아래 조건 작성.
    const newList = list.filter((value) => value.id != id);
    //rendering할 때 list배열을 이용함. list배열에서 원하는 원소를 삭제해야 한다. 삭제한 상품의 고유 키값을 사용.
    //삭제된 버전의 배열을 setList를 이용하여 list의 상태를 변경.
    setList(newList);
  };
  return (
    <>
      <label>추가할 상품: </label>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => {
          setNewProduct(e.target.value);
        }}
      />
      <button onClick={addProduct}>추가하기</button>
      <ul>
        {list.map((value, i) => {
          return (
            <li
              style={{ cursor: "pointer" }}
              key={value.id}
              onDoubleClick={() => {
                deleteProduct(value.id);
              }}
            >
              {value.product}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListMap;
