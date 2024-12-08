import React, { useState } from "react";
import { handleSubmit } from "../../../Admin/HandleSubmit"; // Import the exported handleSubmit function

const NewProductEntery = () => {
  const [formData, setFormData] = useState({
    brand: "",
    style: "",
    category: "",
    price: "",
    status: "",
    description: "",
    size: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the selected image file
  };

  return (
    <div>
      <h2>New Product Entry</h2>
      <form onSubmit={(e) => handleSubmit(e, formData, image)}>
        <div>
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>
        {/* Other form fields */}
        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewProductEntery;
