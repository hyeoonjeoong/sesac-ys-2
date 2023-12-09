import { useForm } from "react-hook-form";

//useForm는 앞쪽에 배열이 아니라 객체구조분해로 가져온다.
//formState : 정규식을 만족하지 못하면 error에 담긴다.
export default function SignUpPrac() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const okSubmit = (data) => {
    console.log("제출 성공", data);
  };

  const noSubmit = (err) => {
    console.log("실패", err);
  };

  return (
    <>
      <h3>react hook form 실습</h3>
      <form onSubmit={handleSubmit(okSubmit, noSubmit)}>
        <input
          type="text"
          placeholder="이름"
          {...register("name", {
            required: "아이디는 필수값입니다.",
          })}
        />
        {errors.name?.message}
        <br />
        <input
          type="number"
          placeholder="나이"
          {...register("age", {
            required: "나이는 숫자만 입력 가능합니다.",
            min: {
              value: 0,
              message: "0이상의 숫자만 입력 가능합니다.",
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
