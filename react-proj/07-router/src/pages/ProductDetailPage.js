import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("Loading...");
  const { id } = useParams();
  console.log(id);
  //product/:id/:name
  //params => {id: value, name: value}

  //쿼리를 가져오고 싶을 땐? useSearchParams이용
  const [query, setQuery] = useSearchParams();
  //기본 라우터 뒤에 ?id=2&name=lily 이런식으로 들어 올 수도 있다.
  console.log(query); //URLSearchParams {size:1}
  console.log(query.get("name")); //lily

  //Link컴포넌트를 이용하지 않고, js함수 내부에서 페이지를 이동시키는 코드를 작성해야 할 때 사용
  const navigator = useNavigate();

  const getProduct = async () => {
    try {
      //오류가 날 수도 있는 코드를 try에 넣는다.
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (res.ok) {
        const prod = await res.json();
        setProduct(prod);
      } else {
        throw Error("존재하지 않는 상품입니다");
      }
    } catch (error) {
      //try에서 오류가 발생하면 catch로 이동한다.
      console.log(error);
      setError(error.message);
      //   setError("존재하지 않는 상품입니다");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div>여기는 상품 상세 페이지</div>
      {/* navigator(-1)은 뒤로가기와 동일한셈 앞으로 한 칸, 뒤로 한 칸 */}
      <button onClick={() => navigator(-1)}>상품 목록으로 이동</button>
      <button onClick={() => navigator("/")}>홈으로 이동</button>
      {/* setQuery는 인자로 보내준 정보를 이용하여 새로운 쿼리를 만들고 해당하는 url로 바꿔준다. */}
      <button onClick={() => setQuery({ name: "code" })}>
        setQuery 테스트
      </button>
      {product ? (
        <>
          <ul>
            <li>번호: {product.id}</li>
            <li>상품명: {product.title}</li>
          </ul>
        </>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
}
