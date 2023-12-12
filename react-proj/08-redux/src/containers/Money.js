import { useState } from "react";

export function Money() {
  const [money, setMoney] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const addMoney = () => {
    const inputCash = inputValue;
    if (inputCash) {
      setMoney((prevMoney) => prevMoney + inputCash);

      setInputValue("");
    }
  };

  const minusMoney = () => {
    const outputCash = inputValue;
    if (outputCash) {
      setMoney((prevMoney) => prevMoney - outputCash);
    }
  };
  return (
    <>
      <h3>코딩온 은행</h3>
      <h2>잔액 : {money}원</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(parseFloat(e.target.value))}
      />
      <button onClick={addMoney}>입금</button>
      <button onClick={minusMoney}>출금</button>
    </>
  );
}
