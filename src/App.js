import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";


function App() {
  
  return(
    <div className="App continer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;