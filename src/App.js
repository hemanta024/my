
import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import About from './components/About.js';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState("light");

  const[alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode is enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="myApp" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About/>}/>

          <Route path="/" element={<Textform heading="this is text area" mode={mode} showAlert={showAlert}/>}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
