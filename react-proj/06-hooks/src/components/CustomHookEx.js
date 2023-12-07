import { useState } from "react";

import useToggle from "../hooks/useToggle";

export default function CustomHookEx() {
  const [isPopup, togglePopup] = useToggle(false);

  return (
    <>
      <h3>CustomHook 공부</h3>
      {isPopup && <div>보인다</div>}
      <button onClick={togglePopup}>토글토글</button>
    </>
  );
}
