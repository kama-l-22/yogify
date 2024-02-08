import "./App.css";
import React from "react";
import Mainpage from "./components/mainpage";
import LoginPage from './components/LoginPage';
import TimerPage from "./components/timer";
import EvaluatePage from './components/evaluate';
import Render1 from "./components/render1";
import SignupPage from "./components/SigninPsge";
import { Route,Routes,BrowserRouter } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
    <Routes >
      <Route index Component={LoginPage} />
        <Route path="Signup" element={<SignupPage />} ></Route>
        <Route path="Login" element={<LoginPage />} />
        <Route path="home" element={<Mainpage />} />
        <Route path="timerpage" element={<TimerPage />} />
        <Route path="evaluate" element={<EvaluatePage />}/>
        <Route path="renderPage" element={<Render1 />} />
      
    </Routes>
    </BrowserRouter>
   
  );
}   

export default App;  

