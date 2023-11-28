function Prac1() {
  const animal = "dog";
  const name = "cookie";
  const a = 15;
  const b = 7;
  const title = "hello world";

  return (
    <>
      <h2>
        제 반려동물의 이름은 {name}입니다. <br />
        {name}는 {animal}입니다.
      </h2>
      <div>{3 + 5 == 8 ? "정답입니다!" : "오답입니다!"}</div>
      <div>{a > b && "a가 b보다 큼"}</div>
      <div className="titleCss">{title}</div>
      <div className="center">
        아이디 : <input></input>
      </div>
      <div className="center">
        비밀번호 : <input></input>
      </div>
    </>
  );
}
export default Prac1;
