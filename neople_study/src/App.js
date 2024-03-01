import Header from "./components/Header";
import Main from "./components/Main";
import Universe from "./components/pages/Universe";
import Game from "./components/pages/Game";
import Contents from "./components/pages/Contents";
import Notfound from "./components/Notfound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const gnbData = ["universe", "game", "contents", "news"];

function App() {

  return (
    <Router>
      <Header gnbData={gnbData} />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/universe/*" element={<Universe />} />
        <Route path="/game" element={<Game />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
