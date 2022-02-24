import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import MainNav  from "./components/navigation/MainNav";
import Auth from "./pages/Auth";
import { Bookings } from "./pages/Bookings";
import { Events } from "./pages/Events";
import AuthContext from "./context/auth-context";

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = (token, userId, tokenExpiration) => {
    setToken(token);
    setUserId(userId);
  };
  const logout = () => {
    setToken(null);
    setUserId(null);
  };
  return (
    <BrowserRouter>
      <React.Fragment>
        <AuthContext.Provider
          value={{
            token: token,
            userId: userId,
            login: login,
            logout: logout,
          }}
        >
          <MainNav />
          <main className="main-content">
            <Routes>              
              {token && (<Route path="/" element={<Navigate to="events"  />} />)}
              {token && (<Route path="auth" element={<Navigate to="events"  />} />)}
              {!token && (<Route path="auth" element={<Auth />} />)}
              {token &&(<Route path="bookings" element={<Bookings />} />)}
              <Route path="events" element={<Events />} />
              {!token && (<Route path="*" element={<Navigate to="auth" />} />)}
            </Routes>
          </main>
        </AuthContext.Provider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
