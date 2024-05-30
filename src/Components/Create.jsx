import React, { useContext, useState } from "react";
import { ContextProduct } from "../ContextStore/Context";
import { nanoid } from "nanoid";
// import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [products, setProducts] = useContext(ContextProduct);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [heading, setHeading] = useState("");
  const [category, setCategory] = useState("");
  const [price, setMoney] = useState("");
  const [dec, setDes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (
    //   // title.trim().length < 5 ||
    //   // image.trim().length < 5 ||
    //   // heading.trim().length < 5 ||
    //   // category.trim().length < 5 ||
    //   // price.trim().length < 1 ||
    //   // dec.trim().length < 5
    // ) {
    //   alert("you must have atleast 4 characters here");
    //   // directly we are making it go outoff function
    //   return;
    // }
    const product = {
      id: nanoid(),
      title,
      image,
      category,
      heading,
      price,
      dec,
    };
    const updatedprd = [...products, product];
    setProducts(updatedprd);
    // setProducts([...products, product]);
    console.log(products);
    localStorage.setItem(products, JSON.stringify(updatedprd));
    navigate("/");
    // toast.success('New product added');
  };

  return (
    <form
      className="w-full bg-red-300 h-[80vh] flex flex-col justify-center items-center gap-2"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl w-1/2 mb-1">Fill the form</h1>
      <input
        className="w-1/2 text-2xl rounded-md p-1"
        placeholder="Enter Your Product"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={title}
      />
      <input
        className="w-1/2 text-2xl rounded-md p-1"
        placeholder="Enter img"
        type="url"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        className="w-1/2 text-2xl rounded-md p-1"
        placeholder="Enter heading"
        type="text"
        onChange={(e) => setHeading(e.target.value)}
        value={heading}
      />
      <div className="flex justify-between w-1/2">
        <input
          className="w-[48%] text-2xl rounded-md p-1"
          placeholder="Enter category"
          type="text"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          className="w-[49%] text-2xl rounded-md p-1"
          placeholder="Enter price"
          type="text"
          onChange={(e) => setMoney(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="w-1/2 text-2xl rounded-md p-3 mb-3"
        placeholder="Enter description"
        type="text"
        onChange={(e) => setDes(e.target.value)}
        value={dec}
      />
      <div className="w-1/2">
        <button className="self-start mb-4 bg-zinc-100 font-semibold px-2 py-2 rounded-lg text-blue-300 border-blue">
          ADD PRODUCT
        </button>
      </div>
    </form>
  );
};

export default Create;
