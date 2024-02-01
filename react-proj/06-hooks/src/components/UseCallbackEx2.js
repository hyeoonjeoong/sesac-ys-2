import { useCallback, useEffect, useState } from "react";

export default function UseCallbackEx2({ postId }) {
  const [post, setPost] = useState();
  //   https://jsonplaceholder.typicode.com/posts/
  const fetchData = useCallback(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    //위에서 불러온 응답을 json형태로 변환
    //버튼 클릭마다 postId + 1 되게 되고
    //[postId]가 바뀔 때 마다 json데이터도 결국 바뀌게 되는 것.

    const post = await res.json();
    setPost(post);
  }, [postId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h3>useCallback 공부 2</h3>
      <div>조회한 포스트 ID: {postId}</div>

      {post && (
        <div>
          <div>id: {post.id}</div>
          <div>title: {post.title}</div>
          <div>body: {post.body}</div>
        </div>
      )}
    </>
  );
}

//useMemo : 특정 값을 기억하여 불필요한 연산을 방지
//useCallback : 특정 함수를 기억하여, 불필요한 재선언을 방지
