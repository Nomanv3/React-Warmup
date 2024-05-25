import React from "react";
import { ContextProduct } from "../ContextStore/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  // here we want to add filter functionality to our project so we will use reduce function it is a higher order function of js  it give us two values first accumulator second is current value and accumulator jo hai wo array ki current value hoti hai its means jo value abhi store hai hamre pass

  // we want ki humko sabki unique values mil jy ismai se ok
  const [products] = useContext(ContextProduct);

  let distinc_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  // what is the df of the set it give us the unique set of the collection it means if we have alot of same products or repitaion in our project what set will set will make collection of them
  distinc_category = [...new Set(distinc_category)];

  console.log(distinc_category);
  // here we got the set of the category from the

  // here lets make a function for the unique color for the dot in our category ok
  let color = () => {
    return `rgba(${(Math.random() * 255).toFixed()} ${(
      Math.random() * 255
    ).toFixed()}, ${(Math.random() * 255).toFixed(),0.4})
    `
  };

  console.log(color())

  // console.log(() => color())
  return (
    <nav className="w-[15%] bg-zinc-200 h-screen flex flex-col items-center ">
      <Link
        to="/Create"
        className="mt-5 mb-4 bg-zinc-300 font-semibold px-2 py-2 rounded-lg text-blue-300 border-blue"
      >
        ADD PRODUCT
      </Link>

      <hr className="w-[80%]" />
      <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
      <div className="w-[80%] ">
        {/* <Link   to='/Create' >Create</Link>        */}

        {distinc_category.map((c, i) => (
          <Link
            to={`/?category=${c}`}
            key={i}
            className="flex items-center mb-3"
          >
            <span
            style={{background: color()}}
              className={` mr-2 h-[15px] w-[15px] rounded-full`}
            ></span>
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
