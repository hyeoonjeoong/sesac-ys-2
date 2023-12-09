import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [product, setProduct] = useState(null);
  const getProducts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    //json형태로 한 번 더 파싱해주는 것
    const products = await res.json();
    setProduct(products);
  };

  //getProducts 함수는 업데이트 될 필요 없다. 페이지가 마운트 될 때 한 번만 사용하면 된다.
  //의존성 빈 배열 넣어준다.
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div>여기는 상품 페이지</div>
      {product ? (
        <>
          {product.map((value) => (
            <ul key={value.id}>
              <li>
                {/* products/1 이런 식으로 이동되게 된다. */}
                <Link to={`/products/${value.id}`}>상세페이지로 이동하기</Link>
              </li>
              <li>번호: {value.id}</li>
              <li>상품명: {value.title}</li>
              <li>상품설명: {value.body}</li>
            </ul>
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
