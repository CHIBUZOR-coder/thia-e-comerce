import React, { useState, useEffect, useMemo, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { FaPlus, FaStar } from "react-icons/fa6";

import Footer from "./home/Footer";
import { DataContext } from "../Components/DataContext";
import QuantityInput from "./home/ShopCategory/Qantity";

const Shopp = ({ dataItems }) => {
  const { AddToCart } = useContext(DataContext);
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  // const [Quantity, setQuantity] = useState(() => {
  //   // Check if a saved value exists in localStorage
  //   const savedQuantity = localStorage.getItem("Quantity");
  //   // If there is a saved value, use it, otherwise default to 1
  //   return savedQuantity ? parseInt(savedQuantity, 10) : 1;
  // });

  const [Quantity, setQuantity] = useState(1);
  // const InputRef = useRef();

  const { sizeError } = useContext(DataContext);
  console.log(Quantity);

  const InputCounter = (event) => {
    // setInputCount(e.target.value);
    // setInputCount(parseInt(e.target.value, 10) || 1);
    // setQuantity(event.target.value);
    setQuantity(Number(event.target.value) || 1);
  };
  // console.log(inputCount);

  // useEffect(() => {
  //   console.log(dataItems);
  // },[]);

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

  useEffect(() => {
    const foundItem =
      dataItems && dataItems.find((item) => item.id === parseInt(id));
    if (foundItem) {
      setItem(foundItem); // Set the item once it's found
    }
  }, [id, dataItems]);

  // useEffect(() => {
  //   // Ensure that the item is available and has a valid size
  //   if (item && item.size) {
  //     const sizeKey = Object.keys(sizeValues).find(
  //       (key) => sizeValues[key].value === item.size
  //     );

  //     // If a matching size is found, set it as the default
  //     if (sizeKey) {
  //       setSelectedSize(sizeKey);
  //     } else {
  //       // If no matching size is found, reset to null or a default size
  //       setSelectedSize(Object.keys(sizeValues)[0]); // Set to the first size as default
  //     }
  //   }
  // }, [item, sizeValues]); // Re-run whenever item or sizeValues changes

  useEffect(() => {
    if (item) {
      const defaultSizeKey = Object.keys(sizeValues)[0]; // Default to first size
      setSelectedSize(defaultSizeKey);
      setSelectedValue(sizeValues[defaultSizeKey].value);
    }
  }, [item, sizeValues]);


  // useEffect(() => {
  //   localStorage.setItem("quantity", Quantity);
  // }, [Quantity]);
  const handleSizeSelect = (sizeKey) => {
    setSelectedSize(sizeKey); // Update the selected size key

    // Log the value associated with the selected key
    const selected = sizeValues[sizeKey]?.value;
    setSelectedValue(selected);
    console.log(selectedValue);

    console.log(`Selected size value: ${selectedValue}`);
  };

  const handleIncrease = () => {
    console.log("Increase button clicked");
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  useEffect(() => {
    if (selectedSize) {
      console.log(`Selected size: ${selectedSize}`);
    }
  }, [selectedSize]);

  useEffect(() => {
    console.log(`Selected val: ${selectedValue}`);
  }, []);

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!item) {
    return <p>Loading...</p>; // Show "item not found" message if the item is not found
  }

  // const itemWithQuantity = { ...item, quantity: Quantity, amount: 0 };
  const itemWithQuantity = {
    ...item,
    quantity: Quantity,
    amount: item.price * Quantity,
  };

  return (
    <div>
      <div className="md:px-28 py-10 px-4">
        <div className="flex flex-col md:flex-row w-full gap-5 md:gap-8">
          <div
            className="h-[500px] w-3/4 rounded-sm"
            style={{
              background: `url(${item.image}) center center/cover`,
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
              <div>
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
                <label
                  htmlFor="quantity"
                  className="font-semibold flex justify-start items-center gap-2"
                >
                  <p> Quantity</p>
                  {/* <p className="text-red-600">{sizeError ? "Required" : ""}</p> */}
                </label>
                <QuantityInput
                  Quantity={Quantity}
                  handleIncrease={handleIncrease}
                  handleDecrease={handleDecrease}
                  InputCounter={InputCounter}
                />
              </div>
              <div>
                <button className="w-full h-10 flex justify-center my-4 items-center gap-3 bg-red-500 text-white font-bold border-red-500 rounded-md transition ease-in-out duration-300 shadow-slate-800 hover:bg-red-200 hover:text-red-500 px-4">
                  <span
                    onClick={() => {
                      AddToCart(
                        itemWithQuantity,
                        itemWithQuantity.quantity,
                        selectedValue
                      );
                      // console.log(itemWithQuantity);
                      // console.log(Quantity);
                    }}
                  >
                    Add To Cart
                  </span>
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

export default Shopp;
