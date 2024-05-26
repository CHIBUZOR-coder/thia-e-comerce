// FormReview.jsx
import React, { useState } from "react";
import Footer from "./Footer";
import { FaLocationArrow } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail, IoMailUnreadSharp } from "react-icons/io5";

const FormReview = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
      const response = await fetch("http://localhost:8000/Messages", {
        // Updated endpoint URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        alert("Message sent successfully!"); // User feedback
      } else {
        console.error("Error submitting review:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="bg-primary py-10 my-3 w-full">
      <div className="flex  flex-col md:flex-row py-10 justify-center items-center md:px-28 px-6 gap-20">
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Your e-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-sm shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="thiaContact rounded-full h-80 w-80"></div>
      </div>
      <div className=" md:px-28 px-6 md:gap-0 gap-8 py-10  bg-white w-full flex flex-col md:flex-row md:justify-between justify-center md:items-center items-start">
        <div className="">
          <FaLocationDot className=" contactIcons " />
          <p className="italic"> No.42 Ogbaga Road, Abakaliki, Ebonyi State</p>
        </div>
        <div className="">
          <FaPhone className="  contactIcons  " />
          <p className="italic"> 08134248537</p>
        </div>
        <div className="">
          <IoMailUnreadSharp className=" contactIcons " />
          <p className="italic"> thiaApareal@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormReview;
