export const handleSubmit = async (e, formData, image) => {
  e.preventDefault(); // Prevent default form submission

  // Prepare form data for submission
  const data = new FormData();
  Object.keys(formData).forEach((key) => {
    data.append(key, formData[key]);
  });

  // Append image file
  if (image) {
    data.append("image", image);
  }

  try {
    const response = await fetch("https://your-api-endpoint.com/products", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      const result = await response.json();
      alert("Product added successfully!");
      console.log("Server Response:", result);
    } else {
      alert("Failed to add product.");
      console.error("Error:", response.statusText);
    }
  } catch (error) {
    alert("An error occurred.");
    console.error("Error:", error);
  }
};
