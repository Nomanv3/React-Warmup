import axios from "../Utilis/axios";
import React, { createContext, useEffect, useState } from "react";


// lets export our contextproduct page to other pages
 export const ContextProduct  = createContext()

const Context = (props) => {
// no value is 
    const [products , setproduct] = useState(null)

    console.log(axios)

  const getprouduct = async () =>{
try {
   let {data} = await axios("/products")
    console.log(data);
    setproduct(data)
} catch (error) {
    console.log(error)
}
  }

  useEffect(()=>{

    getprouduct();
  },[])


  return(
     <ContextProduct.Provider value={[products , setproduct]}>{props.children}</ContextProduct.Provider>
  )
};

export default Context;
