import { useState } from "react";

export function Money() {
  const [money, setMoney] = useState(0);

  const addMoney = (value) => {
    const newMoney = value + money;
    console.log(newMoney);
  };

  return (
    <>
      <h3>코딩온 은행</h3>
      <h2>잔액 : {money}원</h2>
      <input
        type="number"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
      />
      <button onClick={addMoney}>입금</button>
      <button>출금</button>
    </>
  );
}
