// src/Shopp.jsx
import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { FaPlus, FaStar } from "react-icons/fa6";
import Footer from "./home/Footer";

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
  initialQuantity: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Shopp = ({ dataItems }) => {
  const { id } = useParams();
  const item = dataItems.find((item) => item.id === parseInt(id));

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

  const handleSizeSelect = (sizeKey) => {
    setSelectedSize(sizeKey);
  };

  const handleQuantityChange = (newQuantity) => {
    // Handle quantity change if needed
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

Shopp.propTypes = {
  dataItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      size: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Shopp;
