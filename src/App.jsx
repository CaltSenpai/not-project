import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Checkin, Checkout, Acquisitions, Patrons, Landing } from "./Pages/index"
import './App.css';
import Navbar from "./comps/newNav";
import Card from "./comps/card/Card";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        
        <Navbar />
        <div className="routes">
        <Routes>
          <Route path = "/" element = { <Landing /> } />
          <Route path = "/dash" element = { <Home /> } />
          <Route path = "/check-in" element = {<Card comp={<Checkin />} />} />
          <Route path = "/check-out" element = {<Card comp={<Checkout />}/> } />
          <Route path = "/acquisitions" element = {<Card comp={ <Acquisitions />} />} />
          <Route path = "/patrons" element = { <Card comp={<Patrons />} />} />
        </Routes>
        </div>
        
      </BrowserRouter> 
     
     
     
    </div>
  );
}

export default App;
