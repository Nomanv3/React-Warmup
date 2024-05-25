// import React, { useContext } from "react";
// import Nav from "./Nav";
// import { Link } from "react-router-dom";
// import { ContextProduct } from "../ContextStore/Context";
// import Loading from "./Loading";

// const Home = () => {
//   const [products] = useContext(ContextProduct);

//   if (!products) return console.log("loading.....");
//   console.log(products);

//   return products ? (
//     <>
//       <Nav />
//       <div className=" w-[85%] p-10 pt-[5%] bg-zinc-100  flex flex-wrap overflow-x-hidden overflow-y-auto">
//         {products.map((items, index) => {
//           <Link
//             to={`/detail/${items.id}`}
//             key={index}
//             className="border shadow bg-gray-200 rounded-lg h-[30vh] overflow-hidden w-[18%] flex flex-col items-center justify-center mr-3 mb-3"
//           >
//             <div
//               className="hover:scale-110 rounded-md mb-3 image h-[80%] w-full bg-contain bg-no-repeat bg-center"
//               style={{ backgroundImage: `url(${items.image})` }}
//             ></div>
//             <h1 className="hover:text-blue-400 font-semibold text-sm">
//               {items.title}
//             </h1>
//           </Link>;
//         })}
//       </div>
//     </>
//   ) : (
//     <Loading />
//   );
// };

// export default Home;

// new updated version lets check it what is wrong in ours

 


import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ContextProduct } from "../ContextStore/Context";
import Loading from "./Loading";
import axios from "../Utilis/axios";

const Home = () => {
  const [products] = useContext(ContextProduct);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  const [filterProduct, setFilterProduct] = useState({products});

  const getProductCategory = async () => {
    try {
      const response = await axios.get(`/products/category/${category}`);
      setFilterProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if(!filterProduct || category == "undefined")
    if (category) {
      getProductCategory();
    }
  }, [category]);

  if (!products) {
    console.log("loading.....");
    return <Loading />;
  }

  console.log(products);

  return (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] bg-zinc-100 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {(filterProduct.length > 0 ? filterProduct : products).map((item, index) => (
          <Link
            to={`/detail/${item.id}`}
            key={index}
            className="border shadow bg-gray-200 rounded-lg h-[30vh] overflow-hidden w-[18%] flex flex-col items-center justify-center mr-3 mb-3"
          >
            <div
              className="hover:scale-110 rounded-md mb-3 image h-[80%] w-full bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <h1 className="hover:text-blue-400 font-semibold text-sm">
              {item.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
