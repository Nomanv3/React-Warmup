import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContextProduct } from "../ContextStore/Context";
import axios from "../Utilis/axios";
import Loading from "./Loading";

const Detail = () => {


  const [product , setproduct] = useState(null)
  const {id} = useParams()


  const getprouduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproduct(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getprouduct()
  } , [id])
    
  if (!product) {
    return <Loading />;
  }
  // console.log(product.id)
  return (    
    <div className="h-full w-[70%] m-auto flex bg-zinc-100 py-[10%] ">
      <img
        className="object-contain rounded-sm w-[40%] "
        src={`${product.image}`}
        alt=""
      />
      <div className="content  w-[40%]">
        <h1 className="text-2xl font-semibold">
          {product.title}
        </h1>
        <h2 className="text-zinc-300">{product.category}</h2>
        <h3 className="text-1xl font-medium text-red-500">$ {product.price}</h3>
        <p className="mb-[5%]">
          {product.description}
        </p>

        <Link className="edit px-3 py-1 rounded-xl mt-2 border  p-2 border-blue-300 m-5">
          Edit
        </Link>
        <Link className="edit px-3 py-1 rounded-lg border border-red-700">
          Delete
        </Link>
      </div>
    </div>  
  );
};

export default Detail;
