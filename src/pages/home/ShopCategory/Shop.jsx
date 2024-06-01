// import React from "react";
// import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";
// import useFetch from "../Usefetch";
// import { FaStar } from "react-icons/fa6";
// import { FaArrowAltCircleRight } from "react-icons/fa";

// const Shop = ({ dataa }) => {
//   const { id } = useParams();
//   const { data: item, isLoading, error } = useFetch(`${dataa}/${id}`);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   console.log(item);

//   return (
//     <div className="md:px-28 py-10  px-4">
//       <div className="flex flex-col md:flex-row w-full gap-5 md:gap-8">
//         <div
//           className="h-[500px] w-3/4 rounded-sm"
//           style={{
//             background: `url(../images/${item.image}.jpg) center center/cover`,
//           }}
//         ></div>
//         <div className=" pr-0 md:pr-10">
//           <p className=" text-3xl font-semibold ">{item.title}</p>

//           <p className="my-4">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam
//             vel ratione atque eum iure placeat doloremque laborum et, quaerat
//             ullam animi rem nam enim architecto quod perferendis numquam sed?
//           </p>
//           <span className="flex justify-start items-start gap-1 my-4 text-yellow-400">
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//           </span>

//           <p className=" text-3xl md:text-x1 text-red-500 font-semibold ">
//             ${item.price}
//           </p>

//           <div className="w-1/2 my-4">
//             <div className=" w-full flex flex-col gap-2">
//               <label
//                 type="numer"
//                 name="price"
//                 id="price"
//                 className=" font-semibold "
//               >
//                 Quantity
//               </label>

//               <input
//                 type="numer"
//                 name="price"
//                 id="price"
//                 className=" h-10 font-semibold border border-gray-300 text-sm max-w-full outline-none rounded-md focus:border-red-500 px-4 "
//                 defaultValue={1}
//                 required
//               />
//             </div>
//             <div>
//               <button className=" w-full h-10 flex justify-center my-4 items-center gap-3 bg-red-500 text-white font-bold border-red-500 rounded-md transition ease-in-out duration-300 shadow-slate-800 hover:bg-red-200 hover:text-red-500 px-4 ">
//                 <span>Confirm Order</span>
//                 <FaArrowAltCircleRight />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Shop.propTypes = {
//   dataa: PropTypes.string.isRequired,
// };

// export default Shop;

import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import useFetch from "../Usefetch";
import { FaPlus, FaStar } from "react-icons/fa6";
import Footer from "../Footer";

const QuantityInput = ({ initialQuantity, onChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange(newQuantity); // Notify parent of the new quantity
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange(newQuantity); // Notify parent of the new quantity
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <button
        type="button"
        onClick={handleDecrease}
        className="h-10 px-2 text-lg font-semibold text-gray-700"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          const newQuantity = Number(e.target.value);
          setQuantity(newQuantity);
          onChange(newQuantity); // Notify parent of the new quantity
        }}
        className="h-10 text-center w-12 font-semibold text-gray-700 outline-none"
      />
      <button
        type="button"
        onClick={handleIncrease}
        className="h-10 px-2 text-lg font-semibold text-gray-700"
      >
        +
      </button>
    </div>
  );
};

QuantityInput.propTypes = {
  initialQuantity: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

QuantityInput.defaultProps = {
  initialQuantity: 1,
};

const Shop = ({ dataa }) => {
  const { id } = useParams();
  const { data: item, isLoading, error } = useFetch(`${dataa}/${id}`);
  const [quantity, setQuantity] = useState(1); // State for quantity in the Shop component

  const sizeValues = useMemo(
    () => ({
      A: { value: 34 },
      B: { value: 36 },
      C: { value: 38 },
      D: { value: 40 },
      E: { value: 42 },
    }),
    []
  );

  const [selectedSize, setSelectedSize] = useState(null); // State for the selected size

  useEffect(() => {
    if (item && item.size) {
      const sizeKey = Object.keys(sizeValues).find(
        (key) => sizeValues[key].value === item.size
      );
      setSelectedSize(sizeKey || null); // Set the default size
    }
  }, [item, sizeValues]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleSizeSelect = (sizeKey) => {
    setSelectedSize(sizeKey);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity); // Update the Shop component's state with the new quantity
  };

  return (
    <div className="">
      <div className="md:px-28 py-10 px-4">
        <div className="flex flex-col md:flex-row w-full gap-5 md:gap-8">
          <div
            className="h-[500px] w-3/4 rounded-sm"
            style={{
              background: `url(../images/${item.image}.jpg) center center/cover`,
            }}
          ></div>
          <div className="pr-0 md:pr-10">
            <p className="text-3xl font-semibold">{item.title}</p>

            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam
              vel ratione atque eum iure placeat doloremque laborum et, quaerat
              ullam animi rem nam enim architecto quod perferendis numquam sed?
            </p>
            <span className="flex justify-start items-start gap-1 my-4 text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>

            <p className="text-3xl md:text-xl text-red-500 font-semibold">
              ${item.price}
            </p>

            <div className="w-1/2 my-4">
              <div className="">
                <p className="font-semibold my-2">Size</p>

                <div className="flex justify-start gap-2 items-center w-full">
                  {Object.keys(sizeValues).map((sizeKey, index) => (
                    <span
                      key={index}
                      className={`sizeval ${
                        selectedSize === sizeKey ? "active" : ""
                      }`}
                      onClick={() => handleSizeSelect(sizeKey)}
                      style={{
                        backgroundColor:
                          selectedSize === sizeKey ? "#EF4444" : "",
                        color: selectedSize === sizeKey ? "#ffffff" : "",
                        border:
                          selectedSize === sizeKey ? "1px solid #000" : "",
                      }}
                    >
                      {sizeValues[sizeKey].value}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full flex flex-col gap-2 my-6">
                <label htmlFor="quantity" className="font-semibold">
                  Quantity
                </label>
                <QuantityInput
                  initialQuantity={1}
                  onChange={handleQuantityChange} // Pass the callback to handle quantity changes
                />
              </div>
              <div>
                <button className="w-full h-10 flex justify-center my-4 items-center gap-3 bg-red-500 text-white font-bold border-red-500 rounded-md transition ease-in-out duration-300 shadow-slate-800 hover:bg-red-200 hover:text-red-500 px-4">
                  <span>Add To Cart</span>
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Shop.propTypes = {
  dataa: PropTypes.string.isRequired,
};

export default Shop;
