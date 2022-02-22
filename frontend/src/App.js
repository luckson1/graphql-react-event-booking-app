import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { Bookings } from "./pages/Bookings";
import { Events } from "./pages/Events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
                <Route path="/" element={<Auth />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
