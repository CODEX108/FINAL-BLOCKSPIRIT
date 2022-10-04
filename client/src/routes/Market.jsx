import React from "react";
import  {Navbar,Footer}  from "../components";
import {MarketPlace} from "../components";
import market from '../components/market.css';

const Market = ()=>{
    return (
    <div className="min-h-screen">
     <div className="gradient__bg"> 
        
        <MarketPlace />  
        <Footer />      
    </div>
    </div>
    
    );
}

export default Market;