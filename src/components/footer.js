import React, {useContext} from "react";
import {ThemeContext} from "../context/themeContext" 

const Footer = () => {
  const {isDark, setIsDark} = useContext(ThemeContext)
  const toggleTheme = () => {
    setIsDark(!isDark);
  }
  return (
    <footer 
      className="footer"
      style={{
        backgroundColor : isDark ? "black" : "lightgray"
      }}
    >
      <button className="button" onClick={toggleTheme}>Dark Theme</button>
    </footer>
  )
}

export default Footer;