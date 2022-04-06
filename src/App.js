import React, {useState} from "react";
import "./style.css";
import Page from "./components/page";
import {ThemeContext} from "./context/themeContext";
import {UserContext} from "./context/userContext";

export default function App() {
const [isDark, setIsDark] = useState(false);
const [user, setUser] = useState("");

  return (
    <UserContext.Provider value = {{user,setUser}}>
    <ThemeContext.Provider value = {{isDark, setIsDark}}>
      <Page/>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
