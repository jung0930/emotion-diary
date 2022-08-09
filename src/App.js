import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouteTest from "./components/RouteTest";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

// COMONENTS
import Mybutton from "./components/MyButton.js";
import MyHeader from "./components/MyHeader.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText="App"
          leftChild={
            <Mybutton text={"왼쪽 버튼"} onClick={() => alert("왼쪽 클릭")} />
          }
          rightChild={
            <Mybutton
              text={"오른쪽 버튼"}
              onClick={() => alert("오른쪽 클릭")}
            />
          }
        />
        <h2>App.js</h2>

        <Mybutton
          text={"버튼"}
          onClick={() => alert("버튼클릭")}
          type={"positive"}
        />
        <Mybutton
          text={"버튼"}
          onClick={() => alert("버튼클릭")}
          type={"negative"}
        />
        <Mybutton
          text={"버튼"}
          onClick={() => alert("버튼클릭")}
          type={"defalut"}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
