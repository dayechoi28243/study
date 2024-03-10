import { useEffect, useState } from "react";

const imgData = ["img1", "img2", "img3", "img4", "img5"];

export default function Post() {
  const [chooseImg, setChooseImg] = useState("");
  const [text, setText] = useState("");

  const selectImg = imgData.map((i) => {
    return (
      <>
        <label onClick={() => setChooseImg(i)}>
          <input type="radio" name="img" value={i} />
          <img src={`./images/${i}.jpg`}></img>
        </label>
      </>
    );
  });

  let savePostData =[];

  //   const savePostData
  for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i);
    if (key !== "ID") {
      const value = JSON.parse(window.localStorage.getItem(key));
      savePostData.push(value)
    }
  }

  const savePost = savePostData.map((p) => {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    return (
        <div className="post_content">
          <img className="post_content_img" src={`./images/${p.img}.jpg`} />
          <div className="post_text_cont">
            <b>{p.user}</b>
            <span> {p.text}</span>
            <small>
              {year}. {month}. {date}
            </small>
          </div>
        </div>
      );
  });

  const [postData, setPostData] = useState([{}]);

//   const postContent = postData
//     .filter((f, i) => i > 0)
//     .map((p) => {
//       let today = new Date();

//       let year = today.getFullYear(); // 년도
//       let month = today.getMonth() + 1; // 월
//       let date = today.getDate(); // 날짜
//       console.log(p);

//       return (
//         <div className="post_content">
//           <img className="post_content_img" src={`./images/${p.img}.jpg`} />
//           <div className="post_text_cont">
//             <b>{p.user}</b>
//             <span> {p.text}</span>
//             <small>
//               {year}. {month}. {date}
//             </small>
//           </div>
//         </div>
//       );
//     });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text || !chooseImg) {
      alert("⚠️error!");
    } else {
      const user = localStorage.getItem("ID");
      setPostData([...postData, { img: chooseImg, text: text, user: user }]);
      // json으로 변환하여 로컬스토리지에 포스트 등록
      localStorage.setItem(
        window.localStorage.length,
        JSON.stringify({ img: chooseImg, text: text, user: user })
      );
      // 코멘트 인풋 값 삭제 & useState에 저장한 텍스트 값 삭제
      e.target.comment_input.value = null;
      setText("");
      // 선택한 이미지 라디오 모두 선택 취소 후 useState 값 삭제
      e.target.img.forEach((el) => (el.checked = false));
      setChooseImg("");
    }
  };

  return (
    <div className="post">
      <div className="post_inner">
        <div className="post_box">
          <p>POST LIST</p>
          <div className="post_list">{savePost}</div>
        </div>
        <form className="post_form" onSubmit={handleSubmit}>
          <div className="img_select">{selectImg}</div>
          <input
            name="comment_input"
            className="comment_input"
            type="text"
            placeholder="Comment here"
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">POST!</button>
        </form>
      </div>
    </div>
  );
}
