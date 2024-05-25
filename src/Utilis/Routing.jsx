import React from "react";
import { Routes , Route } from "react-router-dom";
import Home from "../Components/Home";
import Detail from "../Components/Detail";
import Create from "../Components/Create";

const Routing = () => {

  return <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Detail/:id" element={<Detail/>} />
        <Route path="/Create" element={<Create/>}  />
      </Routes>
  </>;

};
export default Routing;
