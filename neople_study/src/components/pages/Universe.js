import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import Story from "./universe/Story";
import Character from "./universe/Character";
import Class from "./universe/Class";
import World from "./universe/World";

export default function Universe() {
  const location = useLocation();
  return (
    <>
      <div className="flex w-full p-3 items-center justify-center gap-9">
        <Link to="story">Story</Link>
        <Link to="character">Character</Link>
        <Link to="class">Class</Link>
        <Link to="world">World</Link>
      </div>
      {location.pathname === "/universe" && (
        <div className="main_title w-full h-96 bg-slate-200 flex items-center justify-center">
          Universe
        </div>
      )}

      <Routes>
        <Route path="story/*" element={<Story />} />
        <Route path="character" element={<Character />} />
        <Route path="class" element={<Class />} />
        <Route path="world" element={<World />} />
      </Routes>
    </>
  );
}
