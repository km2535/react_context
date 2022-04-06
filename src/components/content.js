import React,{useContext, useState} from "react";
import {ThemeContext} from "../context/themeContext";
import {UserContext} from "../context/userContext";

const Content = () => {
  const {isDark} = useContext(ThemeContext);
  const {user, setUser} = useContext(UserContext);
  const [name, setName] = useState("");
  const onChange = (e) =>{
    setName(e.target.value);
  }
  const onClick = () =>{
    setUser(name);
  }
  return (
    <div
      className = "content"
      style = {{
        backgroundColor : isDark ? "black" : "white",
        color : isDark ? "white" : "black"
      }}
    >
      <p>{user}님, 좋은 하루 되세요</p>
      <div>
        <input type="text" value={name} onChange={onChange}></input>
        <button onClick = {onClick}>이름 적용하기</button>
      </div>
    </div>
  )
}

export default Content;