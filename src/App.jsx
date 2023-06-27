import './App.css';

import { Routes, Route } from "react-router-dom";
import SignUpComp from './components/SignUpComp';
import Landingpage from './components/Landingpage';
import { Linesdata } from './components/Linesdata';
import ResetPassword from './components/Reset Password/ResetPassword';
import  LoginPage from './components/Login/LoginPage';
import About from './components/About/About';


function App() {
  return (
    <>
      <Routes>
        <Route path="/SignUpComp" element={<SignUpComp />} />
         <Route path="/login" element={<LoginPage />} />
         
        <Route path="/reset" element={<ResetPassword />} /> 
        <Route path="/:name/line" element={<Linesdata />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/aboutUs" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
