import React from "react";
import Home from "./routes/Home";
import  Market  from "./routes/Market";
import {Routes,Route} from "react-router-dom";
import Tutorial from "./routes/Tutorial";


const App = () => {
  return (
   <>
   
   <Routes>
    <Route path="/" element={<Home />}  exact />
    <Route path="/market" element={<Market />}  />
    <Route path="/tutorial" element={<Tutorial />}  />
    </Routes>
    
    </>
  );
}

export default App;
