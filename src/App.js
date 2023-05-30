//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2c2e34";
      showAlert("Dark Mode Enabled", "success");
      document.title="TextUtils - Dark"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title="TextUtils - Light"
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
    <Router>
    <Navbar
        title="TextUtils Blog"
        aboutText="About TextUtils"
        pagemode={Mode}
        togglemode={toggleMode}
      />
      <div className="container">
        <Alert Alertprop={alertState} />
      </div>
    <div className="container">
      
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
          <TextForm
          heading1="Enter your text below to analyze:"
          heading2="Results"
          pagemode={Mode}
        /> 
          </Route>
        </Switch>
        
    </div>
           
      {/* <div className="container">
        <About/>
      </div> */}
      </Router>
    </>
  );
}

export default App;
