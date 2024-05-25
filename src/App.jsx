import React from "react";
import { Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Routing from "./Utilis/Routing";
import { Link } from "react-router-dom";


const App = () => {

  return (
    <div className="h-screen w-full  flex">
      <Link  to='/' className="bg-red-400 absolute left-48 top-8 rounded-md px-2" >Home </Link> 
      {/* <Nav /> */}
      {/* <Home /> */}

      <Routing />
    </div>
  );
};

export default App;
