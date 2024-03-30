import { useEffect, useState } from "react";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/home/Home";
import AppContextProvider from "./context/context";
import HomePage from "./components/HomePage";
import Home from "./components/home/Home";
import CartComponent from "./components/cart/Cart";
import axios from "axios";
import { ClipLoader } from "react-spinners";




function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false)
            }, 5000);

            // console.log(res?.data)
            // setProducts(res.data)
        })
        .catch(Error)
}, [])
  
  return(
    <div className="App continer">
      {loading ? <ClipLoader color="#36d7b7" loading={loading} size={100} /> 
      : (
      <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<CartComponent/>}/>
        </Routes>
  
      </BrowserRouter>
      </AppContextProvider>)
}
    </div>
  )
}
export default App;