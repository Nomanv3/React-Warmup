import React, { useContext, useState } from "react";
import ContextProduct from '../ContextStore/Context'
import {nanoid} from 'nanoid'

const Create = () => {

    const [products , setproduct] = useContext(ContextProduct)

  const [title, settitle] = useState("");
  const [img, setimage] = useState("");
  const [heading, setheading] = useState("");
  const [category, setsetcategory] = useState("");
  const [money, setmoney] = useState("");
  const [dec, setdes] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    const product = {
        id:nanoid(),
      title,
      img,
      category,
      heading,
      money,
      dec,
    };
 
    setproduct([...products , product])
     toast.success("new product Added")
    console.log(products)

  };


  return (
    // <div>
    <>
      <form
        className="w-full bg-red-300 h-[80vh] flex flex-col justify-center items-center  gap-2 "
        onSubmit={handlesubmit}
      >
        <h1 className="text-3xl w-1/2 mb-1">Fill the form</h1>
        <input
          className="w-1/2 text-2xl rounded-md p-1"
          placeholder="Enter Your Product"
          onChange={(e) => settitle(e.target.value)}
          type="text"
          value={title}
        />
        <input
          className="w-1/2 text-2xl rounded-md p-1   "
          placeholder="Enter img"
          type="url"
          onChange={(e) => setimage(e.target.value)}
          value={img}
        />

        <input
          className="w-1/2 text-2xl rounded-md p-1   "
          placeholder="Enter heading"
          type="text"
          onChange={(e) => setheading(e.target.value)}
          value={heading}
        />
        <div className="flex justify-between w-1/2">
          <input
            className="w-[48%] text-2xl rounded-md p-1   "
            placeholder="Enter category"
            type="text"
            onChange={(e) => setsetcategory(e.target.value)}
            value={category}
          />
          <input
            className="w-[49%] text-2xl rounded-md p-1   "
            placeholder="Enter price"
            type="text"
            onChange={(e) => setmoney(e.target.value)}
            value={money}
          />
        </div>

        <textarea
          className="w-1/2 text-2xl rounded-md p-3 mb-3  "
          placeholder="Enter description"
          type="text"
          onChange={(e) => setdes(e.target.value)}
          value={dec}
        />
        <div className="w-1/2">
          <button className=" self-start  mb-4 bg-zinc-100 font-semibold px-2 py-2 rounded-lg text-blue-300 border-blue">
            ADD PRODUCT
          </button>
        </div>
      </form>
    </>
    // </div>
  );
};

export default Create;
