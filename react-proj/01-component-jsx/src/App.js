import "./App.css";
import FunComponent from "./components/FuncComponent";
import ClassComponent from "./components/ClassComponent";
import Prac1 from "./components/prac";
import FunPropsEx from "./components/FuncPropsEx";
import Section from "./components/Section";
import ClassPropsEx from "./components/ClassPropsEx";
import PropsPrac from "./components/PropsPrac";
import Book from "./components/PropsPrac";

//종료태그 꼭 같이 작성해줘야 한다.
function App() {
  return (
    <div>
      {/* <FunComponent /> */}
      {/* <ClassComponent /> */}
      {/* <Prac1 /> */}
      <FunPropsEx title="sesac" content="hello world" number={5} />
      <FunPropsEx content="hello world" number={5} />

      <ClassPropsEx title="sesac Class" content="hello world" number={5} />

      <Section title="SeSAC 영역">
        <div>SeSAC영역의 content입니다.</div>
      </Section>
      <Section title="코딩온 영역">
        <div>코딩온영역의 content입니다.</div>
      </Section>

      {/* <PropsPrac food="치킨" /> */}

      <PropsPrac
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      ></PropsPrac>
    </div>
  );
}

export default App;
