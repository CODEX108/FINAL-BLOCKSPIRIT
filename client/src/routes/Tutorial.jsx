import React from "react";
import { Navbar, Footer,Terminology,Work } from "../components";


const Tutorial = ()=>{
    return (
    <div className="min-h-screen">
     <div className="gradient-bg-welcome"> 
        <Navbar />       
        <Terminology/>
        <Work />
        </div> 
        <Footer />
    </div>
    
    );
}

export default Tutorial;