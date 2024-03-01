import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function Header({gnbData}) {
  const gnbList = gnbData.map((data) => {
    return (
      <li className="uppercase" value={data}>
        <Link to={`/${data}`}>{data}</Link>
      </li>
    );
  });

  return (
    <div className="header flex relative p-7 bg-black text-white">
      <Link to="/">NEOPLE</Link>
      <ul className="gnb_list flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-6">
        {gnbList}
      </ul>
    </div>
  );
}
