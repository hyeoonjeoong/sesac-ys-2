import "./App.css";
import ListMap from "./components/ListMap";
import MapPrac from "./components/MapPrac";
import FunRef from "./components/FuncRef";
import ClassRef from "./components/ClassRef";
import ScrollBox from "./components/ScrollBox";

function App() {
  return (
    <div>
      <h3>ListMap</h3>
      <ListMap />

      <h3>MapPrac</h3>
      <MapPrac />

      <h3>FunRef</h3>
      <FunRef />

      <h3>ClassRef</h3>
      <ClassRef />

      <h3>ScrollBox</h3>
      <ScrollBox />
    </div>
  );
}

export default App;
