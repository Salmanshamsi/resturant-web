import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./scenes/home";
import Login from "./scenes/login";
import Signup from "./scenes/signup";
import ForgotPassword from "./scenes/forgotPassword";
import VerificationEmail from "./scenes/verify";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/verification" element={<VerificationEmail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  // return <VerificationEmail />;
  // return <ForgotPassword />;
  // return <Signup />;
  // return <Login />;
};

export default App;
