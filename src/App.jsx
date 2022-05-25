import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Checkin, Checkout, Renew } from "./Pages/index"
import NavbarSimple from "./comps/Navbar";
import Login from "./Pages/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="start"></div>
        <NavbarSimple />
        <Routes>
          <Route path = "/" element = { <Home />} />
          <Route path = "/check-in" element = {<Checkin />} />
          <Route path = "/check-out" element = {<Checkout />} />
          <Route path = "/renew" element = {<Renew />} />
          <Route path = "/patrons" element = {<Patrons />} />
          <Route path = "/acquisitions" element = {<Acquisitions />} />
        </Routes>
      </BrowserRouter>
     
     
     
    </div>
  );
}

export default App;
