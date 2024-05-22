// FormReview.jsx
import React, { useState } from "react";

const FormReview = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    text: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/Clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          name: "",
          location: "",
          text: "",
          image: "",
        });
      } else {
        console.error("Error submitting review:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="bg-primary my-3 w-full">
      <div className="xl:px-28 px-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

        <form onSubmit={handleSubmit} className="mb-8 w-1/2">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Review
            </label>
            <textarea
              name="text"
              value={formData.text}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormReview;
