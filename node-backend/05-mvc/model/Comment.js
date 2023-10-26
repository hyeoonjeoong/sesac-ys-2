exports.commentInfos = () => {
  //원래대로면 mysql 연결
  //select * from comment; 로 생각. 이 데이터를 받아온걸로.
  //외부에서 사용할거라 return해준다. 이건 컨트롤러에서 불러오자.
  return [
    {
      id: 1,
      userid: "lily",
      date: "2023-10-26",
      comment: "hello",
    },
    {
      id: 2,
      userid: "gildong",
      date: "2023-12-26",
      comment: "hello world",
    },
  ];
};
