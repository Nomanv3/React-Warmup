import { json } from "react-router-dom";
import axios from "../Utilis/axios";
import React, { createContext, useEffect, useState } from "react";
import { parse } from "postcss";

// Export ContextProduct for use in other components
export const ContextProduct = createContext();

const Context = (props) => {
  const [products, setProduct] = useState(
    null
  );


   useEffect(()=>{
    const fetchedprouduct = localStorage.getItem('products')

    if(fetchedprouduct){
        try {
          const parseprdt = JSON.parse(fetchedprouduct);
               setProduct(parseprdt)

        } catch (error) {
          console.log(error)
          setProduct([])
        }
    }else{
      setProduct([])
    }
   }, [])


  // const getProducts = async () => {
  //   try {
  //     let { data } = await axios.get("/products");
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <ContextProduct.Provider value={[products, setProduct]}>
      {props.children}
    </ContextProduct.Provider>
  );
};

export default Context;
