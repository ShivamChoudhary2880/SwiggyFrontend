import Header from "./components/LandingPage/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyOtp from "./components/VerifyOtp";
import Home from "./components/HomePage/Home";
import Resto from "./components/RestoPage/Resto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/verifyOtp" element={<VerifyOtp />} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      <Resto/>
    </>
  );
}

export default App;
