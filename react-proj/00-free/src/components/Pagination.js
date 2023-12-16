// components/Pagination.js
import React from "react";

import * as S from "../styles/PaginationStyle.js";
//total - 총 게시물 수
//limit - 페이지 당 게시물 수
//page - 현재 페이지 번호
//setPage
const Pagination = ({ total, limit, page, setPage }) => {
  //전체 아이템의 개수를 페이지 당 표시할 아이템의 개수로 나눈 결과를 올림(.ceil)
  const totalPages = Math.ceil(total / limit);

  const handlePageClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <S.PageButton
          key={i}
          active={i === page}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </S.PageButton>
      );
    }
    return buttons;
  };

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <S.PaginationWrapper>
        <S.PageButton onClick={handlePrevClick}>이전</S.PageButton>
        {renderPageButtons()}
        <S.PageButton onClick={handleNextClick}>다음</S.PageButton>
      </S.PaginationWrapper>
    </>
  );
};

export default Pagination;
