import React from "react";

import * as S from "../styles/PageNationStyle.js";

function PageNation({ total, limit, page, setPage }) {
  //---전체 페이지 수 계산
  //.ceil을 사용해 전체 아이템의 개수를 페이지 당 표시할 아이템의 개수로 나눈 결과를 올려준다.
  //전체 아이템 개수가 18개, 페이지 당 표시할 아이템의 수가 10개 라면 (18/10 = 1.8)
  //얘를 2로 올려준다. 그럼 생성되는 페이지는 총 2페이지!
  const totalPages = Math.ceil(total / limit);

  //---페이지 변경 함수
  //newPage : 클릭한 페이지버튼의 페이지 번호
  //클릭한 페이지가 1이상이고 전체 페이지 수 이하라면 클릭한 페이지로 업데이트 해준다.
  function handlePageClick(newPage) {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  }

  //---계산 된 전체 페이지 수에 따라 페이지 버튼 생성하고 보여주기
  //buttons 빈 배열 만들고 push, 반환하는 방식
  // {i} : 버튼에 표시 될 페이지 번호
  function renderPageButtons() {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <S.PageButton
          key={i}
          active={i === page} //현재 페이지 번호가 버튼의 페이지 번호와 같을 때 active 처리
          onClick={() => handlePageClick(i)}
        >
          {i}
        </S.PageButton>
      );
    }
    return buttons;
  }

  return (
    <>
      <S.PageNationWrapper>
        <S.PageButton
          onClick={() => handlePageClick(page - 1)}
          disabled={page === 1}
        >
          이전
        </S.PageButton>
        {renderPageButtons()}
        <S.PageButton
          onClick={() => handlePageClick(page + 1)}
          disabled={page === totalPages}
        >
          다음
        </S.PageButton>
      </S.PageNationWrapper>
    </>
  );
}

export default PageNation;
