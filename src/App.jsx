import Header from "./components/LandingPage/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyOtp from "./components/VerifyOtp";
import Home from "./components/HomePage/Home";
import Resto from "./components/Create/Resto";
import Dish from "./components/Create/Dish";
import UpDish from "./components/Create/upDish";
import Page2 from "./components/HomePage/Page2";
import Page3 from "./components/HomePage/Page3";
import Burger from "./components/HomePage/Burger";
import CreateGrocery from "./components/Create/CreateGrocery";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/verifyOtp" element={<VerifyOtp />} />

          <Route path="/home" element={<Home />}>
            {/* <Route index element={<HomeLayout/>} /> */}
            <Route path="Burger" element={<Burger />} />
          </Route>
          
          <Route path="/UpDish" element={<UpDish />} />
          <Route path="/Dish" element={<Dish />} />
          <Route path="/Resto" element={<Resto />} />
          <Route path="/createGrocery" element={< CreateGrocery/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
