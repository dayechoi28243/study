import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Post from "./components/Post";
import "./Layout.css";

function App() {
  const [localStorageId, setLocalStorageId] = useState(localStorage.getItem("ID"));
  return (
    <div className="App">
      <BrowserRouter>
        <Header localStorageId={localStorageId} setLocalStorageId={setLocalStorageId}/>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
      {localStorageId && <Post />}
    </div>
  );
}

export default App;
