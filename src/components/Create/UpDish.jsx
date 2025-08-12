import React, { useEffect, useState } from "react";
import axios from "axios";

function UpDish() {
  const [dishes, setdishes] = useState([]);
  const [selectedName, setselectedName] = useState("");
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState(null)

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/v1/api/dish/getAll`
        );
        setdishes(response.data.data);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };
    fetchDishes();
  }, []);

  const handleChange = (e) => {
    setselectedName(e.target.value);
    setNewName(e.target.value);
  };

  const selectedDish = dishes.find((dish) => dish.name === selectedName);

  const handleUpdateName = async () => {
    if (!selectedDish) return;

    try {
      const formData = new FormData();
      formData.append("name", newName);
      if (newImage) {
        formData.append("image", newImage);
      }
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/v1/api/dish/update/${
          selectedDish._id
        }`,formData,
        {
          headers: {
            "content-Type":"multipart/form-data",
          } //"I'm sending a form that includes files
        }
      );

      alert("Dish updated successfully!");

      const refreshed = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/v1/api/dish/getAll`
      );
      setdishes(refreshed.data.data);
      setselectedName(""),
        setNewName("");
      setNewImage(null);
    } catch (error) {
      console.error("Error updating dish name:", error);
      alert("Failed to update dish.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-md border rounded-lg">
      <label className="block mb-2 font-semibold">Choose a Dish</label>
      <select
        value={selectedName}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded mb-6"
      >
        <option value="">-- Select Dish --</option>
        {dishes.map((dish) => (
          <option key={dish._id} value={dish.name}>
            {dish.name}
          </option>
        ))}
      </select>

      {selectedDish && (
        <form>
          <div className="text-center mx-auto w-64 object-cover rounded shadow">
            <h1 className="text-2xl font-bold text-orange-600">
              {selectedDish.name}
            </h1>
            <img src={selectedDish.image} alt={selectedDish.name} />
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-semibold">Update Dish Name</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Enter new name"
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div className="mt-5">
            <label>Update dish image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewImage(e.target.files[0])}
              className="W-full border px-4 py-2 rounded"
            />
          </div>

          <button
            type="button"
            onClick={handleUpdateName}
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
          >
            Update Name
          </button>
        </form>
      )}
    </div>
  );
}

export default UpDish;
