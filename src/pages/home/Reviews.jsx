import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    text: "",
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/reviews");
      const data = await response.json();
      setReviews(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setLoading(false);
    }
  };

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
      const response = await fetch("http://localhost:3000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        fetchReviews();
        setFormData({
          name: "",
          location: "",
          text: "",
        });
      } else {
        console.error("Error submitting review:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="container  bg-slate-600 w-full mx-auto p-4">
      <div className=" bg-primary w-full">
        <div className="xl:px-28 px-4 flex flex-col justify-center items-center  ">
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

      {loading ? (
        <div>Loading reviews...</div>
      ) : (
        <Slider {...settings}>
          {reviews.map((review) => (
            <div
              key={review._id}
              className="p-4 bg-gray-100 rounded-md shadow-md"
            >
              <p className="italic">"{review.text}"</p>
              <p className="mt-2 font-semibold">
                - {review.name}, {review.location}
              </p>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Reviews;
