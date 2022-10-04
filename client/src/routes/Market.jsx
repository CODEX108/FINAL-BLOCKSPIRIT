import React from "react";
import  {Navbar,Footer}  from "../components";
import {MarketPlace} from "../components";

const Market = ()=>{
    return (
    <div className="min-h-screen">
     <div className="gradient-bg-welcome"> 
        <Navbar />
    </div>
        <MarketPlace />  
        <Footer />      
    </div>
    
    );
}

export default Market;