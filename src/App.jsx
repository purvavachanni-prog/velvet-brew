import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import ReservationHistory from "./pages/ReservationHistory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/history" element={<ReservationHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;