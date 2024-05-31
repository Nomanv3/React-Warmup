import axios from "../Utilis/axios";
import React, { createContext, useEffect, useState } from "react";

// Export ContextProduct for use in other components
export const ContextProduct = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(null);
  const fetchedProduct = localStorage.getItem('products');

  console.log(products)
  console.log(fetchedProduct)
  useEffect(() => {


    if (fetchedProduct) {
      try {
        const parsedProduct = JSON.parse(fetchedProduct);
        setProducts(parsedProduct);
      } catch (error) {
        console.error("Error parsing products from localStorage:", error);
        setProducts([]);
      }
    } else {
      setProducts([]);
    }
  }, []);

  // Uncomment if you want to fetch products from an API in the future
  // const getProducts = async () => {
  //   try {
  //     let { data } = await axios.get("/products");
  //     setProducts(data);
  //   } catch (error) {
  //     console.error("Error fetching products from API:", error);
  //   }
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <ContextProduct.Provider value={[products, setProducts]}>
      {props.children}
    </ContextProduct.Provider>
  );
};

export default Context;
