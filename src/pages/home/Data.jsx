import useFetch from "./Usefetch";
import { useState } from "react";
export const Data = () => {
  const {
    data: reviews,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/Clients");
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
        // Fetch updated reviews after submission
        const updatedReviews = await fetch(
          "http://localhost:8000/Clients"
        ).then((res) => res.json());
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
  const data = { handleChange, handleSubmit, formData };
  return <div> {data}</div>;
};

export default Data;
