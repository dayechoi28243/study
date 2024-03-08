import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Header() {
  const [login, setLogin] = useState(false);
  const [inputvlaueCheck, setInputvlaueCheck] = useState(false);
  
  const [id,setId] = useState('')
  const [password,setPassword] = useState('')
  const isLogin = localStorage.getItem("ID");
  const [loginCheck,setLoginCheck] = useState(isLogin)
  
  const loginHandler = () => {
    if (id && password) {
      localStorage.setItem("ID", id);
      setLogin(false);
      setLoginCheck(true);
      setInputvlaueCheck(false);
      console.log('ok')
    } else {
      setInputvlaueCheck(true);
      console.log(id,password)
    }
  };

  const logOut = () => {
    localStorage.removeItem('ID')
    setLoginCheck(false);
    setId(undefined)
    setPassword(undefined)
  }


  return (
    <div className="header">
      <div className="header_inner">
        <Link to="">STUDY SITE</Link>
        <ul className="category">
          {loginCheck ? (
            <>
            <li className="member">HI, {isLogin}!</li>
            <li className="logout" onClick={logOut}>LOGOUT</li>
            </>
          ) : (
            <li className="login" onClick={()=>setLogin(true)}>
              LOGIN
            </li>
          )}
          <li className="menu">MENU</li>
        </ul>
      </div>
      {login && (
        <div className="login_pop">
          <div className="bg" onClick={()=>setLogin(false)}></div>
          <div className="login_pop_inner">
            <h1>LOGIN</h1>
            <input
              type="text"
              placeholder="ID"
              onChange={(e) => setId(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="PASSWORD"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="login_btn" onClick={loginHandler}>
              LOGIN
            </button>
            {inputvlaueCheck && <p className="message">Check your id and password!</p>}
          </div>
        </div>
      )}
    </div>
  );
}
