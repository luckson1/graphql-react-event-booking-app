import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainNav } from "./components/navigation/MainNav";
import Auth from "./pages/Auth";
import { Bookings } from "./pages/Bookings";
import { Events } from "./pages/Events";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <MainNav />
        <main>
          <Routes>
            <Route path="auth" element={<Auth />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="events" element={<Events />} />
          </Routes>
        </main>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
