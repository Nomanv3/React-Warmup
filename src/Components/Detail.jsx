import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContextProduct } from "../ContextStore/Context";
import axios from "../Utilis/axios";
import Loading from "./Loading";

const Detail = () => {
  const [products, setProducts] = useContext(ContextProduct);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (products && products.length > 0) {
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct || null);
    }
  }, [products, id]);

  if (!products) {
    return <Loading />;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="h-full w-[70%] m-auto flex bg-zinc-100 py-[10%]">
      <img
        className="object-contain rounded-sm w-[40%]"
        src={`${product.image}`}
        alt={product.title}
      />
      <div className="content w-[40%]">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <h2 className="text-zinc-300">{product.category}</h2>
        <h3 className="text-1xl font-medium text-red-500">$ {product.price}</h3>
        <p className="mb-[5%]">{product.description}</p>

        <Link to={`/edit/${product.id}`} className="edit px-3 py-1 rounded-xl mt-2 border p-2 border-blue-300 m-5">
          Edit
        </Link>
        <Link to={`/delete/${product.id}`} className="edit px-3 py-1 rounded-lg border border-red-700">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default Detail;
