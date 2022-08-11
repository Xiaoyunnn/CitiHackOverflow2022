import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import "./fontawesome/fontawesome.css";
import "./fontawesome/light.css";
import "./fontawesome/regular.css";
import "./fontawesome/solid.css";
import StocksRanking from "./pages/StocksRanking";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="stocks-ranking" element={<StocksRanking />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
