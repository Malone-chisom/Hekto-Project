import { useEffect, useState } from "react";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/home/Home";
import AppContextProvider from "./context/context";
import HomePage from "./components/HomePage";
import Home from "./components/home/Home";
import CartComponent from "./components/cart/Cart";





function App() {
  
  return(
    <div className="App continer">
 
      <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<CartComponent/>}/>
        </Routes>
  
      </BrowserRouter>
      </AppContextProvider>

    </div>
  )
}
export default App;