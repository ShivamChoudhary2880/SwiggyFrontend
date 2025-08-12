import React, { useState } from 'react'
import axios from 'axios';


const Resto = () => {

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    area: "",
    city: "",
    pincode: "",
    address: "",
    rating: "",
    type: "",
    category: "",
    deliveryMin: "",
    deliveryMax: "",
    deliveryCharge: "",
    distance: "",
    openTime: "",
    closeTime: "",
    offers: "",
    pureVeg: false,
    isOpen: false,
    isFeature: false,
    ratingCount: "",
    tags:"",
    images: [],
     
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        images: files
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      if (key === 'images') {
        Array.from(formData.images).forEach((img) => {
          data.append('images', img);
        });
      } else {
        data.append(key, formData[key]);
      }
    }


    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/v1/api/restaurant`,
        data
      );

      if (response.data.success) {
        alert("Restaurant created successfully!");
      } else {
        alert("Failed to create restaurant.");
      }
    } catch (error) {
      console.error("Resto create error", error);
      alert("server error please try again later");
    }
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="border border-orange-200 max-w-6xl mx-auto mt-10 p-6 bg-orange-50 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-orange-600 text-center mb-4">
          Create Restaurant
        </h2>

        <input
          type="text"
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />
        <textarea
          name='description'
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="pl-2 border border-black rounded-[5px] w-[500px]"
        ></textarea>

        <input
          type="text"
          name='area'
          value={formData.area}
          onChange={handleChange}
          placeholder="Area"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />
        <input
          type="text"
          name='city'
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />
        <input
          type="text"
          name='pincode'
          value={formData.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />
        <input
          type="text"
          name='address'
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />

        <input
          type="text"
          name='rating'
          vlaue={formData.rating}
          onChange={handleChange}
          placeholder="Rating"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />
        <input
          type="text"
          name='type'
          value={formData.type}
          onChange={handleChange}
          placeholder="Type (Veg/non-Veg)"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />
        <input
          type="text"
          name='category'
          value={formData.category}
          onChange={handleChange}
          placeholder="Category (comma-separated)"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />

        <input
          type="text"
          name='deliveryMin'
          value={formData.deliveryMin}
          onChange={handleChange}
          placeholder="Delivery Min"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />
        <input
          type="text"
          name='deliveryMax'
          value={formData.deliveryMax}
          onChange={handleChange}
          placeholder="Delivery Max"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />
        <input
          type="text"
          name='deliveryCharge'
          value={formData.deliveryCharge}
          onChange={handleChange}
          placeholder="Delivery Charge"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />

        <input
          type="text"
          name='distance'
          value={formData.distance}
          onChange={handleChange}
          placeholder="Distance (in km)"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />

        <input
          type="text"
          name='openTime'
          value={formData.openTime}
          onChange={handleChange}
          placeholder="Open Time"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />
        <input
          type="text"
          name='closeTime'
          vlaue={formData.closeTime}
          onChange={handleChange}
          placeholder="Close Time"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />

        <input
          type="text"
          name='offers'
          value={formData.offers}
          onChange={handleChange}
          placeholder="offers (comma-separated)"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />
        <br />
        <div className="flex justify-around mb-3">
          <label>
            Is Pure Veg
            <input type="checkbox" name='pureVeg' checked={formData.pureVeg} onChange={handleChange} className="ml-3" />
          </label>

          <label>
            Is Open
            <input type="checkbox" name='isOpen' checked={formData.isOpen} onChange={handleChange} className="ml-3" />
          </label>

          <label>
            Featured
            <input type="checkbox" name='isFeature' checked={formData.isFeature} onChange={handleChange} className="ml-3" />
          </label>
        </div>

        <input
          type="text"
          name='ratingCount'
          value={formData.ratingCount}
          onChange={handleChange}
          placeholder="Rating Count"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />

        <input
          type="text"
          name='tags'
          vlaue={formData.tags}
          onChange={handleChange}
          placeholder="Tags (Comma-separated)"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />

        <input
          type="file"
          multiple
          name='images'
          onChange={handleChange}
          accept="image/*"
          className="pl-2 border border-black rounded-[5px] w-[500px] m-5"
        />
        
        <div className='text-center text-2xl m-auto bg-blue-700 text-white w-36 rounded-[5px]'>
          <button type="submit" className="cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Resto
