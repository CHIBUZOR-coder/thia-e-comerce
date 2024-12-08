import { useRef, useState } from "react";

const QuantityInput = ({
  Quantity,
  handleIncrease,
  handleDecrease,
  InputCounter,
}) => {
  // dispatch({ type: "Increment" });

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
        value={Quantity}
        
        onChange={(e) => InputCounter(e)}
        className="h-10 text-center w-3/4 font-semibold  text-gray-700 outline-none"
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

// QuantityInput.propTypes = {
//   Quantity: PropTypes.number.isRequired,
//   onIncrease: PropTypes.func.isRequired,
//   onDecrease: PropTypes.func.isRequired,
// };

export default QuantityInput;
