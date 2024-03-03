import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./universe_page.css";

import { Pagination, Mousewheel, FreeMode } from "swiper/modules";


const storyData = [
  { title: "1", subTitle1: "1-1" },
  { title: "2", subTitle1: "2-1", subTitle2: "2-2" },
  { title: "3", subTitle1: "3-1", subTitle2: "3-2" },
  { title: "4", subTitle1: "4-1", subTitle2: "4-2", subTitle3: "4-3" },
];

export default function Story() {
  const navigate = useNavigate();
  const storyContent = storyData.map((el, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="w-72 h-72 rounded-full flex items-center justify-center border-gray-200 border m-9 flex-col gap-1">
          <h1>{el.title}</h1>
          <ul>
            <li className="underline text-gray-400">
              <Link to={el.subTitle1}>{el.subTitle1}</Link>
            </li>
            <li className="underline text-gray-400">
              <Link to={el.subTitle2}>{el.subTitle2}</Link>
            </li>
            <li className="underline text-gray-400">
              <Link to={el.subTitle3}>{el.subTitle3}</Link>
            </li>
          </ul>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <div className="main_title w-full h-96 bg-red-200 flex items-center justify-center">
        Story
      </div>

      <Swiper
        pagination={{
          type: "progressbar",
        }}
        mousewheel={true}
        modules={[FreeMode, Pagination, Mousewheel]}
        className="story_swiper pl-24 pr-24"
        slidesPerView={"auto"}
      >
        {storyContent}
      </Swiper>

      <Routes>
        <Route
          path="1-1"
          element={
            <div className="story_sub_page">
              <div className="bg" onClick={()=>navigate(-1)}></div>
              <div className="cont">1-1</div>
            </div>
          }
        />
        <Route
          path="2-1"
          element={
            <div className="story_sub_page">
              <div className="bg" onClick={()=>navigate(-1)}></div>
              <div className="cont">2-1</div>
            </div>
          }
        />
        <Route
          path="2-2"
          element={
            <div className="story_sub_page">
              <div className="bg" onClick={()=>navigate(-1)}></div>
              <div className="cont">2-2</div>
            </div>
          }
        />
      </Routes>
    </>
  );
}
