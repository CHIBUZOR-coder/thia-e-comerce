import React, { useState, useContext } from "react";
import { DataContext } from "../Components/DataContext";

const AddProduct = () => {
  const { lightMode,  pop,
        HandlePop, showHide } = useContext(DataContext);
  const [isLoading, setIsloading] = useState(false);
  const [output, setOutput] = useState(null);


  const [products, setProducts] = useState([
    {
      brand: "",
      style: "",
      category: "",
      price: "",
      description: "",
      size: "",
      status: "",
      image: null,
    },
  ]);

  console.log(isLoading);

  const postTrigger = async (e) => {
    e.preventDefault();
    
    setIsloading(true);
    try {
      // Get the first product (since you are only posting one product at a time)
      const formData = createFormData(products[0]);

      const response = await fetch("http://localhost:5000/api/Cloths", {
        method: "POST",
        body: formData,
      });

      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`);

      // }
      if (!response.ok) {
        // Parse the error message from the server
        const errorData = await response.json();
        // Throw an error with the server's message (or a fallback)
        throw new Error(
          errorData.message || "An error occurred. Please try again."
        );
      }

      const data = await response.json(); // Handle the response as needed
      console.log("Post Successful:", data);

      setOutput(showHide("true", data.message, "Nothin"));

      setTimeout(() => {
        setOutput(null);
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setOutput(showHide("true", error.message, "Nothin"));

      setTimeout(() => {
        setOutput(null);
      }, 2000);
    } finally {
      setIsloading(false);
    }
  };

  // Function to handle FormData creation
  const createFormData = (product) => {
    const formData = new FormData();

    // Append product fields
    formData.append("brand", product.brand);
    formData.append("style", product.style);
    formData.append("category", product.category);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("size", product.size);
    formData.append("status", product.status);

    // Append the image field if there is an image
    if (product.image) {
      formData.append("image", product.image); 
      // Assuming product.image is a file
    }

    return formData;
  };

  // Send the FormData to the backend

  const handleInputChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  const handleImageChange = (index, file) => {
    if (file && file.size <= MAX_SIZE) {
      const updatedProducts = [...products];
      updatedProducts[index].image = file; // Update the image for the specific product
      setProducts(updatedProducts);
      console.log("file",file);
      
    } else {
      alert("File size is too large. Max size is 5MB.");
    }
  };

  return (
    <div
      className={`w-full p-5 ${
        lightMode
          ? "bg-[url('/images/admin.jpg')]"
          : "bg-[url('/images/adark.jpg')]"
      } bg-cover bg-center relative`}
    >
      <h2 className="text-lg text-gray-500 font-bold mb-4 text-center w-full">
        New Product Entry
      </h2>

      {isLoading && (
        <h2
          className={` ${
            lightMode ? "bg-Anav" : "bg-AdminnavDark"
          } mt-5  p-2 w-1/5   font-semibold text-gray-500 absolute top-18 left-5 `}
        >
          Loding...
        </h2>
      )}

      {output && (
        <div
          className={` ${
            lightMode ? "bg-Anav" : "bg-AdminnavDark"
          }   p-2 md:w-1/3 w-[40%]  font-semibold text-gray-500 absolute top-18 left-5 "`}
        >
          {output}
        </div>
      )}
      <form
        onSubmit={postTrigger} // Use onSubmit to handle form submission
        className={`p-4 w-full text-gray-500 flex justify-center items-center flex-col gap-4 mt-24 transition-all ease-in-out duration-700`}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className={`${
              lightMode ? "formLight" : "formDark"
            } p-5 border-2 border-formBorder rounded-sm`}
          >
            <h3 className="font-semibold">Product {index + 1}</h3>

            <div className="w-full flex flex-col md:flex-row justify-center items-start gap-4">
              <div className="w-[100%] md:w-[50%] flex flex-col gap-4">
                <input
                  className={`${
                    lightMode
                      ? "addRemovebtnLightMode_AddProduct"
                      : "addRemovebtnDarkMode"
                  } ainput`}
                  type="text"
                  placeholder="Brand"
                  value={product.brand}
                  onChange={(e) =>
                    handleInputChange(index, "brand", e.target.value)
                  }
                />
                <input
                  className={`${
                    lightMode
                      ? "addRemovebtnLightMode_AddProduct"
                      : "addRemovebtnDarkMode"
                  } ainput`}
                  type="text"
                  placeholder="Style"
                  value={product.style}
                  onChange={(e) =>
                    handleInputChange(index, "style", e.target.value)
                  }
                />
                <input
                  className={`${
                    lightMode
                      ? "addRemovebtnLightMode_AddProduct"
                      : "addRemovebtnDarkMode"
                  } ainput`}
                  type="text"
                  placeholder="Category"
                  value={product.category}
                  onChange={(e) =>
                    handleInputChange(index, "category", e.target.value)
                  }
                />
                <input
                  className={`${
                    lightMode
                      ? "addRemovebtnLightMode_AddProduct"
                      : "addRemovebtnDarkMode"
                  } ainput`}
                  type="number"
                  placeholder="Price"
                  value={product.price}
                  onChange={(e) =>
                    handleInputChange(index, "price", e.target.value)
                  }
                />
              </div>

              <div className="w-[100%] md:w-[50%] flex flex-col gap-4">
                <input
                  className={`${
                    lightMode
                      ? "addRemovebtnLightMode_AddProduct"
                      : "addRemovebtnDarkMode"
                  } ainput`}
                  type="text"
                  placeholder="Size"
                  value={product.size}
                  onChange={(e) =>
                    handleInputChange(index, "size", e.target.value)
                  }
                />
                <input
                  className={`${
                    lightMode
                      ? "addRemovebtnLightMode_AddProduct"
                      : "addRemovebtnDarkMode"
                  } ainput`}
                  type="text"
                  placeholder="Status"
                  value={product.status}
                  onChange={(e) =>
                    handleInputChange(index, "status", e.target.value)
                  }
                />
                <textarea
                  className={`${
                    lightMode
                      ? "addRemovebtnLightMode_AddProduct"
                      : "addRemovebtnDarkMode"
                  } w-full h-20 p-2`}
                  placeholder="Description"
                  value={product.description}
                  onChange={(e) =>
                    handleInputChange(index, "description", e.target.value)
                  }
                />
                <input
                  className={`${
                    lightMode
                      ? "addRemovebtnLightMode_AddProduct"
                      : "addRemovebtnDarkMode"
                  } w-full h-12 p-2`}
                  type="file"
                  onChange={(e) => handleImageChange(index, e.target.files[0])}
                />
              </div>
            </div>
          </div>
        ))}

        <button
          className={`${
            lightMode
              ? "addRemovebtnLightMode_AddProduct"
              : "addRemovebtnDarkMode"
          }  ${pop ? "pop" : ""} p-2 rounded-md font-semibold`}
          type="submit"
          onClick={HandlePop}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
