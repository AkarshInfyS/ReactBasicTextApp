//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
//import About from "./components/About";

function App() {
  const [Mode, setMode] = useState("light");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2c2e34";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };
  const [alertState, setalertState] = useState(null);
  const showAlert = (message, type) => {
    setalertState({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalertState(null)
    }, 1500);
  };
  return (
    <>
      <Navbar
        title="TextUtils Blog"
        aboutText="About Us"
        pagemode={Mode}
        togglemode={toggleMode}
      />
      <div className="container">
        <Alert Alertprop={alertState} />
      </div>
      <div className="container my-3">
        <TextForm
          heading1="Enter your text below to analyze:"
          heading2="Results"
          pagemode={Mode}
        />
      </div>
      
      {/* <div className="container">
        <About/>
      </div> */}
    </>
  );
}

export default App;
