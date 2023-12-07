import { useState } from "react";

//자주 쓰이는 toggle기능. true 이면 false로, false면 true로 변환시키는 상황.
//이에 따라 처리를 할 일이 자주 생긴다 라고 가정 . 이 로직 자체를 훅으로 만드는 것.
export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
}
