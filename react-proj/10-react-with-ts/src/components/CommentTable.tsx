//Props라는 interface를 만들어준다. 가져와야 할 정보에 대한 타입을 작성해준다.

import CommentTr from "./CommentTr";
import { CommentRow } from "../types/types";

// const [comment, setComment] = useState<CommentRow[]> 이기 때문에 이거 넣어줘야한다.

interface Props {
  comments: CommentRow[];
  test?: string;
}

//타입스크립트와 함께하는 리액트에서는 props도 당연히 type을 지정해줘야 한다.
export default function CommentTable({ comments, test }: Props) {
  return (
    <>
      <table border={1} style={{ marginTop: "30px", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((value, idx) => {
            return <CommentTr key={idx + 1} comment={value} idx={idx} />;
          })}
        </tbody>
      </table>
    </>
  );
}
