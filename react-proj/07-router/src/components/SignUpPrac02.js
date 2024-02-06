import React from "react";
import { useForm } from "react-hook-form";

const SignUpPrac02 = () => {
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
      <hr />
      <h3>react hook form Prac</h3>
      <form onSubmit={handleSubmit(okSubmit, noSubmit)}>
        <label for="id">
          id{" "}
          <input
            type="text"
            name="id"
            id="id"
            placeholder="아이디를 입력해주세요."
            {...register("id", {
              required: "아이디는 필수값입니다.",
            })}
          />
          {errors.id?.message}
          <br />
        </label>
        <label for="pw">
          pw{" "}
          <input
            type="password"
            name="pw"
            id="pw"
            placeholder="8~20자 영문 대소문자, 숫자 조합."
            {...register("pw", {
              required: "비밀번호는 필수값입니다.",
            })}
          />
          {errors.pw?.message}
          <br />
        </label>
        <label for="pwCheck">
          pwCheck{" "}
          <input
            type="password"
            name="pwCheck"
            id="pwCheck"
            placeholder="8~20자 영문 대소문자, 숫자 조합."
            {...register("pwCheck", {
              required: "비밀번호는 필수값입니다.",
            })}
          />
          {errors.pwCheck?.message}
          <br />
        </label>
        <label for="name">
          name{" "}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="이름을 입력해주세요."
            {...register("name", {
              required: "이름은 필수값입니다.",
            })}
          />
          {errors.name?.message}
          <br />
        </label>
        <label for="nickName">
          nickName{" "}
          <input
            type="text"
            name="nickName"
            id="nickName"
            placeholder="사용하실 닉네임을 입력해주세요."
            {...register("nickName", {
              required: "닉네임은 필수값입니다.",
            })}
          />
          {errors.nickName?.message}
          <br />
        </label>
        <button type="submit">회원가입</button>
      </form>
    </>
  );
};

export default SignUpPrac02;
