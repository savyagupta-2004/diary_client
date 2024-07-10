import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Abouts from "./components/Abouts";
import Home from "./components/Home";
import DiaryState from "./context/diary/DiaryState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import Alerts from "./components/Alerts";
import "./App.css";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <DiaryState>
        <Router>
          <Navbar />
          <Alerts alert={alert} />
          <div className="container my-5">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              {/* <Route exact path="/about" element={<Abouts />} /> */}
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </Router>
      </DiaryState>
    </>
  );
}

export default App;
