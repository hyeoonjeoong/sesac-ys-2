import { useForm } from "react-hook-form";

//useForm는 앞쪽에 배열이 아니라 객체구조분해로 가져온다.
//formState : 정규식을 만족하지 못하면 error에 담긴다.
export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onVaild = (data) => {
    console.log("성공", data);
  };
  const onInVaild = (err) => {
    console.log("실패", err);
  };

  const genderRegister = register("gender", {
    required: "성별은 필수값입니다",
  });

  console.log(watch("ID"));
  //가장 기본적인 형태
  //register("ID") => {name: id}
  //required로 필수값 지정, 알림메시지도 처리 가능

  return (
    <>
      <h4>React hook form 테스트</h4>
      {/* handleSubmit(onVaild[,onInVail])}
      {/* onVaild : 폼을 정상적으로 제출할 수 있는 상태일 때 실행시킬 함수 */}
      {/* onInVail: (선택값)폼을 제출할 수 없을 때 실행시킬 함수 */}
      <form onSubmit={handleSubmit(onVaild, onInVaild)}>
        <input
          type="text"
          placeholder="아이디"
          {...register("ID", {
            required: "아이디는 필수값입니다.",
          })}
        />
        {/* errors.ID가 존재한다면 메시지를 띄워준다 */}
        {/* 존재한다면 undefinded가 되기 때문에 안보이게 된다. */}
        {errors.ID?.message}
        <br />
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수값입니다.",
            // minLength: 2,
            //이렇게 말고 아래처럼 할 수도 있다.
            minLength: {
              value: 2, //최소값 지정
              message: "이름은 두 글자 이상 입력해야 합니다.", //최소값을 만족하지 못했을 때 보여주는 메시지
            },
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="text"
          placeholder="이메일"
          {...register("email", {
            required: "이메일은 필수값입니다.",
            // pattern:
            //   /^[0-9a-zA-Z] ([-_.]? [0-9a-zA-Z])*@ [0-9a-zA-Z] ([-_.]? [0-9a-zA-Z])*. [a-zA-Z] {2,3}$/,
            // pattern: {
            //   value:
            //     /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/, // 정규식 지정
            //   message: "올바른 형태의 이메일을 입력해주세요.", // 정규식을 만족하지 못했을 때, 발생시키는 오류 메세지
            // },
            validate: (v) =>
              v.includes("gmail.com") || "gmail로만 가입이 가능합니다.",
          })}
        />
        {errors.email?.message}
        <br />
        <label htmlFor="gender-men">
          <input type="radio" value="남" id="gender-men" {...genderRegister} />{" "}
          남
        </label>
        <label htmlFor="gender-women">
          <input
            type="radio"
            value="여"
            id="gender-women"
            {...genderRegister}
          />{" "}
          여
        </label>{" "}
        {errors.gender?.message}
        <br />
        <button type="submit">회원가입</button>
        <h3>select box</h3>
        <select {...register("option", { required: "옵션은 필수값입니다." })}>
          <option value="">옵션</option>
          <option value="option-1">옵션1</option>
          <option value="option-2">옵션2</option>
          <option value="option-3">옵션3</option>
        </select>
        {errors.option?.message}
      </form>
    </>
  );
}
