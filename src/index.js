import React, {useState} from "react";
import ReactDOM from "react-dom";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import useForm from './Hooks/useForm'

import "./styles.scss";


const useLocalStorage = () => {
  const initialMode  = false
  
  const [darkMode, setDarkMode] = useState(initialMode)
}

const App = () => {
  
  const [coinData, darkMode, setDarkMode] = useForm()
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
