import React, { useState } from "react";

import DataTable from "../components/DataTable";
import PageNation from "../components/PageNation";

const header = [
  {
    text: "NO.",
    value: "productID",
  },
  {
    text: "상품명",
    value: "productName",
  },
  // {
  //   text: "카테고리아이디",
  //   value: "categoryID",
  // },
  {
    text: "카테고리",
    value: "categoryName",
  },
  {
    text: "가격",
    value: "productPrice",
  },
  {
    text: "상태",
    value: "productStatus",
  },
  {
    text: "정보",
    value: "productInfo",
  },
  {
    text: "배송 상태",
    value: "deliveryStatus",
  },
];

const DUMMY = [
  {
    productID: 1,
    productName: "루돌프풍선",
    // categoryID: 2,
    categoryName: "커스텀풍선",
    productPrice: 17000,
    productStatus: "판매중",
    productInfo: "이렇다",
    deliveryStatus: "배송중",
  },
  {
    productID: 2,
    productName: "곰돌이풍선",
    // categoryID: 3,
    categoryName: "용돈풍선",
    productPrice: 17000,
    productStatus: "재고없음",
    productInfo: "저렇다",
    deliveryStatus: "배송중",
  },
  {
    productID: 3,
    productName: "루돌프풍선",
    // categoryID: 2,
    categoryName: "커스텀풍선",
    productPrice: 17000,
    productStatus: "판매중",
    productInfo: "이렇다",
    deliveryStatus: "배송중",
  },
  {
    productID: 4,
    productName: "곰돌이풍선",
    // categoryID: 3,
    categoryName: "용돈풍선",
    productPrice: 17000,
    productStatus: "재고없음",
    productInfo: "저렇다",
    deliveryStatus: "배송중",
  },
  {
    productID: 5,
    productName: "루돌프풍선",
    // categoryID: 2,
    categoryName: "커스텀풍선",
    productPrice: 17000,
    productStatus: "판매중",
    productInfo: "이렇다",
    deliveryStatus: "배송중",
  },
  {
    productID: 6,
    productName: "곰돌이풍선",
    // categoryID: 3,
    categoryName: "용돈풍선",
    productPrice: 17000,
    productStatus: "재고없음",
    productInfo: "저렇다",
    deliveryStatus: "배송중",
  },
  {
    productID: 7,
    productName: "루돌프풍선",
    // categoryID: 2,
    categoryName: "커스텀풍선",
    productPrice: 17000,
    productStatus: "판매중",
    productInfo: "이렇다",
    deliveryStatus: "배송중",
  },
  {
    productID: 8,
    productName: "곰돌이풍선",
    // categoryID: 3,
    categoryName: "용돈풍선",
    productPrice: 17000,
    productStatus: "재고없음",
    productInfo: "저렇다",
    deliveryStatus: "배송중",
  },
  {
    productID: 9,
    productName: "루돌프풍선",
    // categoryID: 2,
    categoryName: "커스텀풍선",
    productPrice: 17000,
    productStatus: "판매중",
    productInfo: "이렇다",
    deliveryStatus: "배송중",
  },
  {
    productID: 10,
    productName: "곰돌이풍선",
    // categoryID: 3,
    categoryName: "용돈풍선",
    productPrice: 17000,
    productStatus: "재고없음",
    productInfo: "저렇다",
    deliveryStatus: "배송중",
  },
  {
    productID: 11,
    productName: "루돌프풍선",
    // categoryID: 2,
    categoryName: "커스텀풍선",
    productPrice: 17000,
    productStatus: "판매중",
    productInfo: "이렇다",
    deliveryStatus: "배송중",
  },
  {
    productID: 12,
    productName: "곰돌이풍선",
    // categoryID: 3,
    categoryName: "용돈풍선",
    productPrice: 17000,
    productStatus: "재고없음",
    productInfo: "저렇다",
    deliveryStatus: "배송중",
  },
];

const SelectBox = () => {
  return (
    <>
      <select name="aaaa">
        <option value="releaseStatus" disabled defaultValue>
          출고 상태 변경
        </option>
        <option value="payWait">결제 대기</option>
        <option value="deliveryStart">출고</option>
        <option value="cancel">취소</option>
      </select>
    </>
  );
};

function ProductPageNation() {
  //---180 ~ 197 번째 줄 까지의 코드 return문 전에 작성 **
  const [currentPage, setCurrentPage] = useState(1);
  const oneOfPage = 10; // 페이지 당 표시할 아이템 수

  //---현재 페이지에 보여질 아이템 범위 계산 (현재 페이지가 2페이지라면)
  //2*10 = 20 //2페이지에 보여질 마지막 아이템의 index는 20
  const indexOfLastItem = currentPage * oneOfPage;

  //20-10 = 10 // 2페이지에 보여질 첫번째 아이템의 index는 10
  const indexOfFirstItem = indexOfLastItem - oneOfPage;

  //---현재 페이지에 표시할 아이템 //**여기 수정!
  //currentPage에 따라 index가 바뀌기 때문에, 그에 맞게 데이터를 잘라서 보여준다.
  const currentItems = DUMMY.slice(indexOfFirstItem, indexOfLastItem);

  //---페이지 변경해주는 함수
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <h3>ProductPageNation</h3>
      <DataTable
        keySet="productsTb_"
        headers={header}
        items={currentItems} //데이터 수를 확인해야해서 가공된 데이터로 보내줘야 한다. 데이터 자체를 보내주면 페이지 안넘어감.
        selectBox={<SelectBox />}
      />
      <PageNation //---PageNation컴포넌트 import 후 아래 props 전달 **
        total={DUMMY.length} //전체 아이템 개수 //**여기 수정!
        limit={oneOfPage} //페이지 당 보여질 게시물 개수
        page={currentPage} //현재 패이지 번호
        setPage={handlePageChange} // 페이지 변경 함수
      />
    </>
  );
}

export default ProductPageNation;
