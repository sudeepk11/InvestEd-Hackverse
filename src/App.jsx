import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import routes from "./routes";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-primary pb-5">

    
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                element={<route.component />}
              />
            )
          );
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  
      </div>
     
    </BrowserRouter>
  );
}

export default App;
