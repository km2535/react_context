import React,{useContext} from "react";
import {ThemeContext} from "../context/themeContext"
import {UserContext} from "../context/userContext"
const Header = () => {
  const {isDark} = useContext(ThemeContext);
  const {user} = useContext(UserContext);
  return (
    <header className="header"
    style = {{
      backgroundColor : isDark ? "black" : "lightgray",
      color : isDark ? "white" : "black"
    }}
    >
      
      {user.length>1 ? <h1>Welcom {user}님!</h1> : <h1>이름을 입력하세요</h1>}
      
    </header>
  )
}

export default Header;