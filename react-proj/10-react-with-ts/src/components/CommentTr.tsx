import { CommentRow } from "../types/types";

interface Props {
  comment: CommentRow;
  idx: number;
}

export default function CommentTr({ comment, idx }: Props) {
  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>{comment.title}</td>
        <td>{comment.writer}</td>
      </tr>
    </>
  );
}
