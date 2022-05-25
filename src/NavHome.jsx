import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Checkin, Checkout, Renew, Acquisitions, Patrons } from "./Pages/index"
import NavbarSimple from "./comps/Navbar";
import './App.css';

function NavHome() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="start"></div>
        
        <NavbarSimple />
        <Routes>
          <Route path = "/home" element = { <Home />} />
          <Route path = "/check-in" element = {<Checkin />} />
          <Route path = "/check-out" element = {<Checkout />} />
          <Route path = "/renew" element = {<Renew />} />
          <Route path = "/acquisitions" element = {<Acquisitions />} />
          <Route path = "/patrons" element = {<Patrons />} />
        </Routes>
      </BrowserRouter>
     
     
     
    </div>
  );
}

export default NavHome;
