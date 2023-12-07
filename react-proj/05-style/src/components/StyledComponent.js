import styled from "styled-components";

//css의 네이밍 중복을 방지할 수 있다.
//css in js . js안에서 css를 사용할 수 있도록 도와준다.
//컴포넌트 내부에서만 적용되도록 할 수 있다.

//스타일이 적용된 요소를 컴포넌트화 한다. 변수명 앞 대문자.
//=  styled 뒤에는 실제 존재하는 태그 작성해주면 된다.
//내부에는 적용하고 싶은 스타일을 작성해주면 된다.
const Container = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

//색이 정해져있지 않으면 블랙으로 해라 . ||연산자 사용
//props.color가 return이 되면 되는거고 아니면 black이 된댜.
//props사용할때는 ${}안에 작성해준다. 백틱안에 작성해야하니까.
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color || "black"};

  &:hover {
    transform: scale(1.1);
  }
`;

export default function StyledComponent() {
  return (
    <>
      <Container>
        <Box color="red"></Box>
        <Box color="orange"></Box>
        <Box color="yellow"></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Container>
    </>
  );
}
