import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import "./Layout.css";

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
